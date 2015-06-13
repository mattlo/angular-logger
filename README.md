_This project is no longer maintained. It is now included and superseded by: **[better-js-logging/angular-logger](https://github.com/better-js-logging/angular-logger)**._

_Your current "angular-logger" bower dependency will keep working and is still the correct one. If you want to continue using this project, refer to angular-logger-basic instead on bower._

---

# ~~Angular Logger~~

An angular module that outputs additional information on the `$log` object. 

## Install

Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install angular-logger-basic
```

Add the dependency in your Angular's project dependency arguments:

```
var app = angular.module('MyApp', [
	'angular-logger'
]);
```

## Usage

The module utilizes `$provide.decorator` to override `$log` and automatically wraps it when its included as a dependency. API usage is the same as https://docs.angularjs.org/api/ng/service/$log

Timestamps are in `Hours:Minutes:Seconds` format.

```
$log.info('Hello World'); // 12:34:56 [INFO] Hello World 
```

### Example

The preview sandbox has exposed the `$log` object in the `window` context so you can fiddle the outputs in the console yourself.

Demo: http://fiddle.jshell.net/MattLo/5gJMX/show/

![Example usage of angular-logger](http://i.imgur.com/cUUYAKP.png)

## License
View the [LICENSE](https://github.com/mattlo/angular-logger/blob/master/LICENSE) file.
