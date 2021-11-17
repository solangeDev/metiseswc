import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { LazyLoaderService } from '../core/services/lazy-loader.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'wc-city-angular';
  @Input('cities') cities!: string;
  @Input('citiesObj') citiesObj!: {
    val1: 0;
    val2: 0;
    val3: 0;
    val4: 0;
    val5: 0;
  };

  @Output() likeNotify = new EventEmitter<boolean>();

  @ViewChild('dynamicOutlet', { read: ViewContainerRef })
  dynamicOutlet!: ViewContainerRef;
  @ViewChild('welcome', { static: true }) welcome!: ElementRef;
  @ViewChild('cityWrapper', { static: true }) cityWrapper!: ElementRef;
  @ViewChild('city', { static: true }) city!: ElementRef;
  isGrabbing = false;
  scale = 1;
  position = {
    top: 0,
    left: 0,
    clientX: 0,
    clientY: 0,
    dx: 0,
    dy: 0,
  };

  options = [
    {
      title: 'Warehouse',
      icon: 'assets/images/warehouse.png',
      holdTime: 0,
    },
    {
      title: 'Sales',
      icon: 'assets/images/sales.png',
      holdTime: 0,
    },
    {
      title: 'Purchases',
      icon: 'assets/images/purchases.png',
      holdTime: 0,
    },
    {
      title: 'Store',
      icon: 'assets/images/store.png',
      holdTime: 0,
    },
    {
      title: 'CRM',
      icon: 'assets/images/crm.png',
      holdTime: 0,
    },
    {
      title: 'Human Resources',
      icon: 'assets/images/human-resources.png',
      holdTime: 0,
    },
  ];

  constructor(
    private ngZone: NgZone,
    private lazyLoaderService: LazyLoaderService,
    private MatDialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.citiesObj = JSON.parse(changes['cities'].currentValue);
    // this.citiesObj = JSON.parse(this.cities);
    // changes.prop contains the old and the new value...
  }

  ngOnInit(): void {
    this.ngZone.run(() => {
      setTimeout(() => {
        this.welcome.nativeElement.style.display = 'none';
      }, 4000);
    });
    this.lazyLoaderService.getComponentFactory().subscribe((component) => {
      if (component) {
        // this.dynamicOutlet.createComponent(component);
      }
    });
  }

  loadModule() {
    this.dynamicOutlet.clear();
    // this.lazyLoaderService.loadModule(() => import('@app/invoices/invoices.module').then(m => m.InvoicesModule));
  }

  mouseDownHandler(e: MouseEvent) {
    // Only left click
    if (e.button === 0) {
      this.isGrabbing = true;
      // Set grabbing start position
      this.position = {
        ...this.position,
        clientX: e.clientX,
        clientY: e.clientY,
      };

      this.cityWrapper.nativeElement.style.cursor = 'grabbing';
      this.cityWrapper.nativeElement.style.userSelect = 'none';
    }
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.isGrabbing) {
      // How far the mouse has been moved
      const dx = this.position.top + e.clientX - this.position.clientX;
      const dy = this.position.left + e.clientY - this.position.clientY;
      this.position = {
        ...this.position,
        dx: dx,
        dy: dy,
      };

      // Move the element
      this.cityWrapper.nativeElement.style.top = dy + 'px';
      this.cityWrapper.nativeElement.style.left = dx + 'px';
    }
  }

  mouseUpHandler(e: MouseEvent) {
    this.isGrabbing = false;
    this.cityWrapper.nativeElement.style.cursor = 'auto';
    this.cityWrapper.nativeElement.style.removeProperty('user-select');

    const { dx, dy } = this.position;
    this.position = {
      ...this.position,
      top: dx,
      left: dy,
    };
  }

  mouseWheelHandler(e: WheelEvent) {
    e.preventDefault();

    this.scale += e.deltaY * -0.005;
    // Restrict scale
    this.scale = Math.min(Math.max(0.125, this.scale), 3);
    this.city.nativeElement.style.transform = `scale(${this.scale})`;
  }

  // evento para emitir al shell
  likeEvent() {
    this.likeNotify.emit(true);
  }

  openDialog() {
    this.MatDialog.open(ModalComponent);
  }
}
