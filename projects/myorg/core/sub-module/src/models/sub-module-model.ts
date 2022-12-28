import { ModelBase } from '@myorg/core';

/**
 * A foo interface.
 */
export interface IFoo {
   /** Code */
   code: number;
   /** Name */
   name: string;
}

/**
 * Class that both implements IFoo and extends ModelBase.
 */
export class SubModuleModel extends ModelBase implements IFoo {
   /** {@inheritDoc "<internal>".IFoo.code} */
   public code: number = 0;
   /** {@inheritDoc "<internal>".IFoo.name} */
   public name: string = '';

   /**
    * Creates a new SubModuleModel.
    */
   public constructor(_data?: IFoo) {
      super();
   }

   /** {@inheritDoc "<internal>".ModelBase.someMethod} */
   public override someMethod(): void {
      // do stuff
   }

   /** {@inheritDoc "<internal>".ModelBase.someAbstractMethod} */
   public someAbstractMethod(): void {
      // do stuff
   }
}
