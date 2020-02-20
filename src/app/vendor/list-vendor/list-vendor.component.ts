import {Component, OnInit, ViewChild} from '@angular/core';
import { VendorService } from '../vendor.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {

  constructor(private vendorService: VendorService) { }

    dataSource: any;
    columnsToDisplay = ['select', 'code', 'company_name'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    selection = new SelectionModel<any>(true, []);

    // tslint:disable-next-line:typedef
  ngOnInit() {
      this.getVendors();
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): any {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): any {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

  getVendors(): any {
      this.vendorService.getVendors().subscribe((data) => {

          this.dataSource = new MatTableDataSource<any>(data.data);
          this.dataSource.paginator = this.paginator;
          console.log(data.data);
          console.log(this.dataSource);

      });
  }
}
