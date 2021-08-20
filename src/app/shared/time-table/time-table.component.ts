import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Observable, Subscription } from 'rxjs';
import { ColumnDefinition } from '../models/column-definition';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTableComponent implements OnInit, OnDestroy {
  private gridOptions!: GridOptions;
  private subs: Subscription = new Subscription();
  private readonly columnDefinitions: ColDef[] = [
    {
      headerName: 'Row',
      valueGetter: 'node.rowIndex + 1',
    },
    {
      headerName: 'TimeStamp',
      valueGetter: Date()
    },
    {
      headerName: 'Action',
      field: 'action',
    },
    {
      headerName: 'Result',
      field: 'result'
    }
  ];

  @Input()
  dynamicCols!: ColumnDefinition[];

  @Input()
  dynamicStreams!: Record<string, Observable<any>>;

  @Input()
  action$!: Observable<string>;

  @Input()
  result$!: Observable<any>;

  @Input()
  refreshTable$!: Observable<void>;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onGridReady(options: GridOptions): void {
    this.gridOptions = options;
    this.setColumnDefinitions();
    this.handleActionUpdate();
    this.handleResultUpdate();
    this.handleObservableMap(this.dynamicStreams);
    this.handleRefreshTable();
  }

  private setColumnDefinitions(): void {
    if (this.gridOptions && this.dynamicCols) {
      this.columnDefinitions.push(...this.dynamicCols);
      this.gridOptions.api?.setColumnDefs(this.columnDefinitions);
    }
  }

  private handleActionUpdate(): void {
    const actionSub = this.action$?.subscribe((value) => {
      this.gridOptions.api?.applyTransaction({ add: [{ action: value }] });
    });

    this.subs.add(actionSub);
  }

  private handleResultUpdate(): void {
    const resultSub = this.result$?.subscribe((value) => {
      this.gridOptions.api?.applyTransaction({ add: [{ result: value }] });
    });

    this.subs.add(resultSub);
  }

  private handleObservableMap(observableMap: Record<string, Observable<any>>): void {
    Object.keys(observableMap).forEach((keyName) => {
      const sub = observableMap[keyName].subscribe((value) => {
        this.gridOptions.api?.applyTransaction({ add: [{ keyName: value }] });
      });

      this.subs.add(sub);
    });
  }

  private handleRefreshTable(): void {
    this.refreshTable$.subscribe(() => {
      this.gridOptions?.api?.refreshCells();
    });
  }
}
