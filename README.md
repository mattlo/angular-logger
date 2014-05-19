# Angular Logger 

An angular module that outputs additional information on the `$log` object. 

## Install

Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install angular-logger
```

Add the dependency in your Angular's project dependency arguments:

```
var app = angular.module('MyApp', [
	'angular-logger'
]);
```

## Usage

The module utilizes `$provide.decorator` to override `$log` and automatically wraps it when its included as a dependency. API usage is the same as https://docs.angularjs.org/api/ng/service/$log

Timestamps are in `Minutes:Seconds:Milliseconds` format.

```
$log.info('Hello World'); // 12:34:56 [INFO] Hello World 
```

### Example

The preview sandbox has exposed the `$log` object in the `window` context so you can fiddle the outputs in the console yourself.

Demo: http://fiddle.jshell.net/MattLo/5gJMX/show/

![Example usage of angular-logger](http://i.imgur.com/cUUYAKP.png)

## License
View the [LICENSE](https://github.com/mattlo/angular-logger/blob/master/LICENSE) file.