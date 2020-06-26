import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeProdutosComponent } from './cadastro-de-produtos.component';

describe('CadastroDeProdutosComponent', () => {
  let component: CadastroDeProdutosComponent;
  let fixture: ComponentFixture<CadastroDeProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
