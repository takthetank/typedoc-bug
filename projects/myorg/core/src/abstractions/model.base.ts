/**
 * Base class for objects.
 */
export abstract class ModelBase {
   /**
    * Does something.
    */
   public someMethod(): void {
      // do stuff
   }

   /**
    * Does nothing, needs implementation.
    */
   public abstract someAbstractMethod(): void;
}
