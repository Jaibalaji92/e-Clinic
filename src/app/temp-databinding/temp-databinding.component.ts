import { Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-temp-databinding',
  templateUrl: './temp-databinding.component.html',
  styleUrls: ['./temp-databinding.component.css']
})
export class TempDatabindingComponent implements OnInit, OnChanges, OnDestroy {

  devices = ["dev1","dev2","dev3"];
  mydevice: string;

  rollNumber: any;
  constructor() {
    console.log('called constructor')
   }

  ngOnInit() {
    console.log('called ngOnInit() ');
  }

  onSelectDevice(device: string) {
    console.log(device);
  }

  onRollNumber(event: any) {
    console.log(event);
    this.rollNumber = event.target.value;
  }

  ngOnChanges() {
    console.log('change deteced');
  }

  ngDocheck() {
    console.log('called ngDocheckI()');
  }

  ngOnDestroy() {
      console.log('called ngOnDestroy');
  }
}
