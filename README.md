# SunnyMouse

[Live Demo](https://sunnymouse.azurewebsites.net/)

## Getting Started
Include all neccessary files:
<ol>
<li>jQuery (Any version higher than 1.9.1 will work)</li>
<li>SunnyMouse.js or SunnyMouse.min.js</li>
</ol>

To install SunnyMouse:
via Package Manager:
```shell
Install-Package SunnyMouse -Version 1.0.0.1
```
via .NET CLI:
```shell
dotnet add package SunnyMouse --version 1.0.0.1
```
via PackageReference:
```shell
<PackageReference Include="SunnyMouse" Version="1.0.0.1" />
```

via Paket CLI:
```shell
paket add SunnyMouse --version 1.0.0.1
```

### For Shadowing Text:
Add the class 'sunnyMouseText' to the text element (Required)
Add the following data-attributes to the elemement:
<ol>
<li>data-max-offsetx (default is 10)</li>
<li>data-max-offsety (default is 10)</li>
<li>data-highlight-color (default is #6f6f6f)</li>
</ol>


```html
<h1 class="display-4 sunnyMouseText" 
    data-max-offsetx="10" 
    data-max-offsety="10" 
    data-highlight-color="blue">Text Element</h1>
```

### For Shadowing Block Elements:
Add the class 'sunnyMouseBox' to the block element (Required)
Add the following data-attributes to the elemement:
<ol>
<li>data-max-offsetx (default is 10)</li>
<li>data-max-offsety (default is 10)</li>
<li>data-highlight-color (default is #6f6f6f)</li>
<li>data-highlight-spread (default is 10)</li>
<li>data-highlight-inset (default is off)</li>
</ol>


```html
<input type="button"
    class="sunnyMouseBox btn-dark btn btn-lg"
    data-max-offsetx="10"
    data-max-offsety="10"
    data-highlight-color="#6f6f6f"
    data-highlight-spread="0"
    data-highlight-inset="inset"
    value="Block Element" />
```
