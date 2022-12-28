import { ModelBase } from '@myorg/core';

/**
 * A foo interface.
 */
export interface IFoo {
   /** The Code property. */
   code: number;
   /** The Name property. */
   name: string;
}

/**
 * Class that both implements IFoo and extends ModelBase.
 */
export class SubModuleModel extends ModelBase implements IFoo {
   /** {@inheritDoc "<internal>".IFoo.code} */
   public code: number = 0;

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

   // eslint-disable-next-line jsdoc/require-jsdoc
   public someAbstractMethod(): void {
      // do stuff
   }
}
