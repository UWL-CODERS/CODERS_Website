import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/focus-trap";
import * as i2 from "./modal-backdrop.component";
import * as i3 from "./modal.directive";
import * as i4 from "./modal-container.component";
export declare class ModalModule {
    static forRoot(): ModuleWithProviders<ModalModule>;
    static forChild(): ModuleWithProviders<ModalModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ModalModule, never, [typeof i1.FocusTrapModule, typeof i2.ModalBackdropComponent, typeof i3.ModalDirective, typeof i4.ModalContainerComponent], [typeof i2.ModalBackdropComponent, typeof i3.ModalDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ModalModule>;
}
