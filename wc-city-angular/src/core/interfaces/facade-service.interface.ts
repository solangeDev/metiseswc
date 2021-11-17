import {PaginatedData} from '@app/table/interfaces/paginated-data.interface';
import {Observable} from 'rxjs';

export interface FacadeService {
  loadPaginatedData(data?: PaginatedData): void

  getData(): Observable<PaginatedData>

  addEntity(data: any): Promise<any>

  updateEntity(data: any): Promise<any>

  deleteEntity(): any

  setCurrentEntity(entity: any): void

  getCurrentEntity(): any
}