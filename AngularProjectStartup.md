# Environment setup

1. install yarn from [Yarn Website](https://yarnpkg.com)
2. install angular-cli globally by running the command `yarn global add @angular/cli`
3. set yarn as default package manager for angular-cli `ng config cli.packagemanager yarn`

# First Steps

1. Create Empty Solution
2. Add .Net Core WebApplication with Angular
3. Delete ClientApp folder from the application

# Angular CLI

1. Create new project with `ng new`
2. Copy all the files to the solution root folder
3. Delete the src and e2e folders
4. Remove all the default application projects from angular.json
5. Set the newProjectRoot to the .Net Web Application folder in angular.json
6. Create new application named ClientApp using `ng generate application ClientApp --routing --style scss`
7. Change the newProjectRoot to packages so all new project will go into packages folder

# First run

1. Edit the .csproj file of the web application and replace usage of npm with yarn since we use yarn
2. Run the application it should be working now

# Set base configuration

1. Set tab size in .editorconfig
2. Update tsconfig.json with our settings (everything strict)
3. Update .eslintrc.json with our rules

# Configure for server side rendering

1. Run generation of angular universal modules for the application `ng generate universal --client-project ClientApp`
2. Edit angular.json file and set the output folders of Client and server app to ClientApp/dist and ClientApp/dist-server
3. Add spa prerendering to the web application in Startup.cs

   ```C#
   spa.UseSpaPrerendering(options =>
   {
      options.BootModulePath = $"{spa.Options.SourcePath}/dist-server/main.js";
      options.BootModuleBuilder = env.IsDevelopment()
      ? new AngularCliBuilder(npmScript: "ssr")
      : null;
      options.ExcludeUrls = new[] { "/sockjs-node" };
   });
   ```

4. Add building of server module to csproj

   ```XML
   <BuildServerSideRenderer>true</BuildServerSideRenderer>
   ```

5. Update main server file with the instructions from [Microsoft](https://docs.microsoft.com/en-us/aspnet/core/spa/angular?view=aspnetcore-2.0&tabs=visual-studio) do not use if for production mode it is always production mode for Angular 6
6. Update tsconfig.app.json to exclude server files

   ```JSON
   {
     "extends": "../../tsconfig.json",
     "compilerOptions": {
       "outDir": "../../out-tsc/app",
       "types": []
     },
      "exclude": [
         "test.ts",
         "**/*.spec.ts",
         "src/main.server.ts",
         "src/app/app.server.module.ts"
      ]
   }
   ```

7. Update tsconfig.server.json to include only server files and fix configuration

   ```JSON
   {
      "extends": "./tsconfig.app.json",
      "compilerOptions": {
         "outDir": "../../out-tsc/app-server",
         "baseUrl": "../../",
         "module": "commonjs",
         "types": [ "node" ]
      },
      "angularCompilerOptions": {
         "entryModule": "src/app/app.server.module#AppServerModule"
      },
      "files": [
         "src/main.server.ts",
         "src/app/app.server.module.ts"
      ]
   }
   ```

8. Run application and it should start now with server side rendering
9. Add configuration to copy package.json and yarn.lock to application for publish and install npm_packages for production after the serverside build (For perendering also npm_packages are required for the serverside runtime)

   ```XML
   <Exec WorkingDirectory="$(SpaRoot)" Command="copy ..\..\package.json" Condition=" '$(BuildServerSideRenderer)' == 'true' " />
   <Exec WorkingDirectory="$(SpaRoot)" Command="copy ..\..\yarn.lock" Condition=" '$(BuildServerSideRenderer)' == 'true' " />
   <Exec WorkingDirectory="$(SpaRoot)" Command="yarn install --production" />
   ```

10. Add target to remove the production only packages after the publish

   ```XML
   <Target Name="RemoveProdNodePackages" AfterTargets="AfterPublish">
      <Exec WorkingDirectory="$(SpaRoot)" Command="rmdir /S /Q node_modules" />
      <Exec WorkingDirectory="$(SpaRoot)" Command="del yarn.lock" />
      <Exec WorkingDirectory="$(SpaRoot)" Command="del package.json" />
   </Target>
   ```

11. Add Lint target to force linting of code on every build

   ```XML
   <Target Name="EnsureLint" BeforeTargets="Build" Condition="Exists('$(SpaRoot)\..\..\node_modules') ">
      <Exec WorkingDirectory="$(SpaRoot)\..\..\" Command="yarn lint" />
   </Target>
   ```
