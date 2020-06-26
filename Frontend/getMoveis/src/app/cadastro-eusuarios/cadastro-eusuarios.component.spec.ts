import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEUsuariosComponent } from './cadastro-eusuarios.component';

describe('CadastroEUsuariosComponent', () => {
  let component: CadastroEUsuariosComponent;
  let fixture: ComponentFixture<CadastroEUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
