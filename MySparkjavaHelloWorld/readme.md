Disclaimer

I am interested in testing technologies and the best way is to do it yourself and experiment. Just do what others did already is a way to learn. This is why I posting what I have done by myself without any pretending to invent or teach anything to anyone.

Happy to share with anyone, happy anyone takes a copy, but I would recommend not to use any of this material as it is more for personal experiment than to achieve anything special other than learning.

# MySparkJavaHelloWorld


Tested on Apache and Jetty!

jetty maven dependencies, sometime recommendation is made to exclude some dependencies, it will need to be uncommented.

```xml
<exclusions>
        <exclusion>
                <groupId>org.eclipse.jetty</groupId>
                <artifactId>jetty-server</artifactId>
        </exclusion>
        <exclusion>
                <groupId>org.eclipse.jetty</groupId>
                <artifactId>jetty-webapp</artifactId>
        </exclusion>
        <exclusion>
            <artifactId>javax.servlet-api</artifactId>
            <groupId>javax.servlet</groupId>
        </exclusion>
</exclusions>
```
### Test using the Web browser when using Jetty

```shell
http://localhost:8080/hellobuddy/foo
>Hellobuddy: foo
http://localhost:8080/hellobuddy/
>None
http://localhost:8080/hello/foo
>Hello: foo
http://localhost:8080/
>Hello World
```


### Test using the Web browser when using Tomcat

```shell
http://localhost:8080/MySparkjavaHelloWorld/hellobuddy/foo
>Hellobuddy: bar
http://localhost:8080/MySparkjavaHelloWorld/hellobuddy/
>None
http://localhost:8080/MySparkjavaHelloWorld/hello/foo
>Hello: foo
http://localhost:8080/MySparkjavaHelloWorld/
>Hello World
```
```