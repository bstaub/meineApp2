import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { TestCountVideoComponent } from './test-count-video/test-count-video.component';
import { MySwitchComponent } from './my-switch/my-switch.component';
import { MyIfComponent } from './my-if/my-if.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyClickComponent } from './my-click/my-click.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { MyImgThumbComponent } from './my-img-thumb/my-img-thumb.component';
import { MyClassBindingComponent } from './my-class-binding/my-class-binding.component';
import { MyStyleBindingComponent } from './my-style-binding/my-style-binding.component';
import { MyOwnPropertiesComponent } from './my-own-properties/my-own-properties.component';
import { MyInputPropertiesComponent } from './my-input-properties/my-input-properties.component';
import { MyEventEmitterComponent } from './my-event-emitter/my-event-emitter.component';
import { MyClickCounterComponent } from './my-click-counter/my-click-counter.component';
import { MyFormKeyupEventComponent } from './my-form-keyup-event/my-form-keyup-event.component';
import { MyIdLinkCloneComponent } from './my-id-link-clone/my-id-link-clone.component';
import {VideoDBService} from './shared/video-db.service';
import { Video2InjectComponent } from './video2-inject/video2-inject.component';
import { ProductComponent } from './product/product.component';
import {ProductsService} from './shared/products.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TestCountVideoComponent,
    MySwitchComponent,
    MyIfComponent,
    MyListComponent,
    MyClickComponent,
    MyPipesComponent,
    MyImgThumbComponent,
    MyClassBindingComponent,
    MyStyleBindingComponent,
    MyOwnPropertiesComponent,
    MyInputPropertiesComponent,
    MyEventEmitterComponent,
    MyClickCounterComponent,
    MyFormKeyupEventComponent,
    MyIdLinkCloneComponent,
    Video2InjectComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  // providers: [VideoDBService, ProductService],
  providers: [VideoDBService, {provide: 'VideoComponentConfig', useValue: 'Injected String meineKonfigVonModules!'}, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
