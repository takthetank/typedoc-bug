# myorg WebPlatform core library

This library contains the core classes and functionalities of the platform. To use it you need to install the `@myorg/core` npm package.
It has three sub libraries:

* `@myorg/core/environment`
  Defines the object models regarding the environment settings
* `@myorg/core/data-transfer`
  Defines the data transfer object models and the custom JSON serialization service
* `@myorg/core/sub-module`
  Defines the meta data object model

## core library

The core library `@myorg/core` Contains essential base classes that are reused in all the platform and must be used also for application development.

### Important base classes

1. `LogProvider`
   All components and services must inherit from this class to provide built in logging functionality.
2. `Destructible`
   An extension of the `LogProvider` that adds also destruction logic. Use this base class for components that need to free resources on destruction.
3. `DataTransferObjectBase`
   Base class for data transfer objects. This are objects that com from WebApi service calls. You need to use this class only in the case when you want to implement custom data transfer object customization. Else this is used internally by the service client code generation.

### Useful types, classes

1. `NamedParameters`
   Object that provides functionality to hold named parameters. Use it where we need dynamically changing parameters that are named.
2. `NamedItemCollection`
   Defines a collection of named items. Use this whenever you need a collection that is indexed by name. The elements need to implement the interface `NamedItem`

## data-transfer library

The data-transfer library contains the core platform data-transfer objects. Some of the more important are:

* `QuerySpec`
* `DataPackage`
* `DataObject`
* `DataLookupPackage`
* `DataPackageDescriptor`

The library contains also a module `DataTransferModule` which registers the default implementation of the `JsonService` to the dependency injection. This service handles the customization of JSON serialization used by the platform.

## environment library

Provides the data transfer models for application environments.

## sub-module library

Provides the data transfer models for application meta data. (`DynamicUI`, `DataSource`, `DataLookup`, ...)
