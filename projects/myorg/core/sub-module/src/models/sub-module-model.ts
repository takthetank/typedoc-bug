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
   /** {@inheritDoc IFoo.code} */
   public code: number = 0;
   /** {@inheritDoc IFoo.name} */
   public name: string = '';

   /**
    * Creates a new SubModuleModel.
    */
   public constructor(_data?: IFoo) {
      super();
   }

   /** {@inheritDoc ModelBase.someMethod} */
   public override someMethod(): void {
      // do stuff
   }

   /** {@inheritDoc ModelBase.someAbstractMethod} */
   public someAbstractMethod(): void {
      // do stuff
   }
}
