(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{331:function(v,t,_){"use strict";_.r(t);var n=_(4),r=Object(n.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("123")])]),v._v(" "),t("h4",{attrs:{id:"spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[v._v("#")]),v._v(" spring")]),v._v(" "),t("h5",{attrs:{id:"spring的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring的优势"}},[v._v("#")]),v._v(" Spring的优势")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("方便解耦，简化开发")])])]),v._v(" "),t("p",[v._v("通过Spring提供的ioc容器，可以将对象之间的依赖关系交由Spring进行控制，避免硬编码所造成的过度耦合，用户不必在为单例模式类，属性文件解析这些底层的需求来编写代码，可以更专注于上层的应用")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("AOP编程的支持")])])]),v._v(" "),t("p",[v._v("通过Spring的AOP功能，方便进行面向切面编程，许多不容易用传统OOP实现的功能可以通过AOP实现")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("声明事务的支持")])])]),v._v(" "),t("p",[v._v("可以将我们从单调烦闷的事务管理代码中解脱出来，通过声明式方式灵活进行事务管理，提高开发效率")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("方便程序的测试")])])]),v._v(" "),t("p",[v._v("可以用非容器依赖的编程方式进行几乎所有的测试工作。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("方便集成各种框架")])])]),v._v(" "),t("p",[v._v("Spring对好多框架都支持")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("降低Java EE API的使用难度")])])]),v._v(" "),t("p",[v._v("Spring对Jave EE API(如 JDBC， JavaMail)进行了薄薄的封装层，使这些API使用难度降低")]),v._v(" "),t("ul",[t("li",[v._v("Java源码是经典学习范例")])]),v._v(" "),t("p",[v._v("Spring的源码设计精妙，结构清晰，它的源码是Java技术的最佳实践的范例")]),v._v(" "),t("h5",{attrs:{id:"spring的体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring的体系结构"}},[v._v("#")]),v._v(" Spring的体系结构")]),v._v(" "),t("p",[v._v("Spring是层层递进的，有"),t("code",[v._v("Beans")]),v._v(", "),t("code",[v._v("Core")]),v._v(", "),t("code",[v._v("Context")]),v._v(", "),t("code",[v._v("SpEL")]),v._v("四个核心容器")]),v._v(" "),t("h5",{attrs:{id:"spring开发步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring开发步骤"}},[v._v("#")]),v._v(" Spring开发步骤")]),v._v(" "),t("blockquote",[t("p",[v._v("使用jsp开发web程序时，通常会在UserServiceImpl类中，创建一个UserDao的实现类，然后调用Dao实现类中的方法。但是耦合性太高了，为了降低耦合性，通常在xml文件中配置UserDaoImpl的全包名，并且加上id标识，而在UserServiceImpl中创建对象可以通过这个id标识来创建（"),t("strong",[v._v("根据id标识获取Bean全限定名，通过反射（new instance）创建Bean对象，然后返回对象")]),v._v("）")])]),v._v(" "),t("ul",[t("li",[v._v("1.导入Spring开发的基本包坐标")]),v._v(" "),t("li",[v._v("2.编写Dao接口和实现类")]),v._v(" "),t("li",[v._v("3.创建Spring核心配置文件")]),v._v(" "),t("li",[v._v("4.在Spring配置文件中配置UserDaoImpl")]),v._v(" "),t("li",[v._v("5.使用Spring的Apl获取Bean对象实例")])]),v._v(" "),t("h5",{attrs:{id:"spring配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring配置文件"}},[v._v("#")]),v._v(" Spring配置文件")]),v._v(" "),t("blockquote",[t("p",[v._v("Bean标签的基本配置")])]),v._v(" "),t("p",[t("strong",[v._v("用于配置对象交由Spring来创建")])]),v._v(" "),t("p",[t("strong",[v._v("默认情况下它调用类中的无参构造函数，如果没有无参构造函数，则不能创建成功")])]),v._v(" "),t("p",[t("strong",[v._v("基本属性")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("id")]),v._v(":Bean实例在Spring容器中的唯一标识")]),v._v(" "),t("li",[t("code",[v._v("class")]),v._v("：Bean的全限定名称")])]),v._v(" "),t("blockquote",[t("p",[v._v("scope属性")])]),v._v(" "),t("p",[t("strong",[v._v("指对象的作用范围，取值如下")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("singleton")]),v._v(":默认值，单例的（两个Bean实例，两个地址是一样的 "),t("strong",[v._v("加载配置文件时创建了对象实例")]),v._v("）")]),v._v(" "),t("li",[t("code",[v._v("prototype")]),v._v(":多例的（多个Bean实例，地址是不一样的"),t("strong",[v._v("调用getBean()方法时创建对象实例")]),v._v("）")]),v._v(" "),t("li",[t("code",[v._v("request")]),v._v(":WEB项目中，Spring创建一个Bean对象，将对象放到request域中")]),v._v(" "),t("li",[t("code",[v._v("session")]),v._v(":WEB项目中，Spring创建一个Bean对象，将对象放到session域中")]),v._v(" "),t("li",[t("code",[v._v("global session")]),v._v(":WEB项目中，应用在Portlet环境，如果没有Porlet环境那么global session 相当于session")])]),v._v(" "),t("blockquote",[t("p",[v._v("Bean实例化的三种方式")])]),v._v(" "),t("ul",[t("li",[v._v("无参构造实例化")]),v._v(" "),t("li",[v._v("工厂静态方法实例化")])]),v._v(" "),t("p",[t("strong",[v._v("创建一个工厂类，编写一个静态工厂方法，在配置文件配置这个工厂类的全类名，添加属性 factory—method指定工厂方法")])]),v._v(" "),t("ul",[t("li",[v._v("工厂实例方法实例化")])]),v._v(" "),t("blockquote",[t("p",[v._v("Bean注入依赖的分析")])]),v._v(" "),t("p",[v._v("UserService实例和UserDao实例都存在与Spring容器中,当前的做法是在容器外部获得UserService实例和UserDao实例，然后在程序中进行结合。 但是UserService和UserDao组合是在容器外面进行的。")]),v._v(" "),t("p",[t("strong",[v._v("可以直接获取UserService实例，在UserService的内部已经存在UserDao实例了（在容器中进行的）")])]),v._v(" "),t("blockquote",[t("p",[v._v("Bean依赖注入")])]),v._v(" "),t("p",[t("strong",[v._v("依赖注入是Spring框架核心IOC的具体实现")])]),v._v(" "),t("p",[t("strong",[v._v("在编写程序时，通过控制反转，把对象的创建交给了Spring，但是代码会出现依赖的情况。IOC解耦只是降低他们的依赖关系，但不会消除，例如:业务层仍会调用持久层的方法")])]),v._v(" "),t("p",[t("strong",[v._v("把UserDao注入到UserService内部")])]),v._v(" "),t("ul",[t("li",[v._v("构造方法")])]),v._v(" "),t("p",[t("strong",[v._v("在UserService中定义一个私有变量UserDao userDao，定义一个有参构造方法，一个无参构造方法，在配置文件中写一个子标签名"),t("code",[v._v('<constructor-arg name "userDao" ref = "userDao"></constructor-arg>')])])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("set方法")]),v._v(" "),t("p",[t("strong",[v._v("在UserService中定义一个私有变量 UserDao userDao，给它一个set方法， 然后在Spring配置文件中指定一个子标签名"),t("code",[v._v('<property name = "userDao" ref="配置的id名"')]),v._v(" name值是set后面的单词，并且第一个字母大写变小写")])])])]),v._v(" "),t("p",[t("strong",[v._v("普通属性的注入不用ref，用value给值就可以")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729103.png",alt:"image-20220413203238339"}})]),v._v(" "),t("p",[t("strong",[v._v("注入Map， List， proprties集合时，使用到了property的子标签，如果map的value值为引用对象时需要使用ref")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729104.png",alt:"image-20220413203202125"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729105.png",alt:"image-20220413203226604"}})]),v._v(" "),t("p",[t("strong",[v._v("Spring配置文件可以通过import标签引入其他的配置文件")])]),v._v(" "),t("h5",{attrs:{id:"spring相关api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring相关api"}},[v._v("#")]),v._v(" Spring相关API")]),v._v(" "),t("p",[t("strong",[t("code",[v._v("ApplicationContext")]),v._v("是一个接口")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("ClassPathXmlApplicationContext")])])]),v._v(" "),t("p",[t("strong",[v._v("他是从类的根路径下加载配置文件")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("FileSystemXmlApplicationContext")])])]),v._v(" "),t("p",[t("strong",[v._v("他是从磁盘路径上加载配置文件，配置文件可以在磁盘的任意位置")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("AnnotationConfigApplicationContext")])])]),v._v(" "),t("p",[t("strong",[v._v("当使用注解配置容器对象时，需要使用此类来创建spring容器，它用来读取注解")])]),v._v(" "),t("h5",{attrs:{id:"spring配置数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring配置数据源"}},[v._v("#")]),v._v(" Spring配置数据源")]),v._v(" "),t("ul",[t("li",[v._v("数据源(连接池)是为了提高程序性能出现的")]),v._v(" "),t("li",[v._v("事先实例化数据源，初始化部分连接资源")]),v._v(" "),t("li",[v._v("使用连接资源时从数据源中获取")]),v._v(" "),t("li",[v._v("使用完毕后将连接资源归还给数据源")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("数据源开发步骤")])])]),v._v(" "),t("p",[v._v("1.导入数据源的坐标和数据库驱动坐标")]),v._v(" "),t("p",[v._v("2.创建数据源对象")]),v._v(" "),t("p",[v._v("3.设置数据源的基本连接数据")]),v._v(" "),t("p",[v._v("4.使用数据源获取连接资源和归还连接资源")]),v._v(" "),t("blockquote",[t("p",[v._v("用Spring配置数据源")])]),v._v(" "),t("p",[t("strong",[v._v("可以将DataSource的创建权交由Spring容器去完成")])]),v._v(" "),t("p",[v._v("1.导入spring-context坐标")]),v._v(" "),t("p",[v._v("2.在applicationContext.xml文件中对DataSource的set方法进行注入")]),v._v(" "),t("p",[v._v("3.调用getBean方法得到DataSource对象")]),v._v(" "),t("p",[v._v("4.获取连接")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729107.png",alt:"image-20220413203717326"}})]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("在Spring容器中加载Properties文件")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729108.png",alt:"image-20220411104949516"}})]),v._v(" "),t("p",[t("strong",[v._v("然后通过${key}来获取properties中的数据")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729109.png",alt:"image-20220413203611270"}})]),v._v(" "),t("h5",{attrs:{id:"spring注解开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring注解开发"}},[v._v("#")]),v._v(" Spring注解开发")]),v._v(" "),t("p",[t("strong",[v._v("Spring是轻代码而重配置的框架，配置比较繁琐，影响开发效率，所以，注解开发是一种趋势，注解代替xml文件可以简化配置，提高开发效率")])]),v._v(" "),t("blockquote",[t("p",[v._v("Spring原始注解")])]),v._v(" "),t("p",[t("strong",[v._v("Spring原始注解主要是替代Bean的配置")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("@Component")]),v._v("：使用在类上面，用于实例化Bean 后面加上（”id“)用于指定id名")]),v._v(" "),t("li",[t("strong",[v._v("@Controller")]),v._v("：使用在web层上用于实例化Bean")]),v._v(" "),t("li",[t("strong",[v._v("@Service")]),v._v("：使用在service层类上用于实例化Bean")]),v._v(" "),t("li",[t("strong",[v._v("@Repository")]),v._v("：使用在dao层类上用于实例化Bean")]),v._v(" "),t("li",[t("strong",[v._v("@Autowired")]),v._v(" :使用在字段上用于根据类型依赖注入")]),v._v(" "),t("li",[t("strong",[v._v("@Qualifier")]),v._v("：结合@Autowired一起使用用于根据名称进行依赖注入")]),v._v(" "),t("li",[t("strong",[v._v("@Resource")]),v._v(":相当于@Autowired + @Qualifier,按照名称注入")]),v._v(" "),t("li",[t("strong",[v._v("@Value")]),v._v(" :注入普通属性")]),v._v(" "),t("li",[t("strong",[v._v("@Scope")]),v._v("：标注Bean的作用范围")]),v._v(" "),t("li",[t("strong",[v._v("@PostConstruct")]),v._v("：使用在方法上标注该方法是Bean的初始化方法")]),v._v(" "),t("li",[t("strong",[v._v("@PreDestroy")]),v._v("：使用在方法上标注该方法时Bean的销毁方法")])]),v._v(" "),t("p",[t("strong",[v._v("注解是在某个方法名或者某个属性前面加上注解")])]),v._v(" "),t("p",[t("strong",[v._v("把UserDaoImpl放入到Spring容器中")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729110.png",alt:"image-20220413203907991"}})]),v._v(" "),t("p",[t("strong",[v._v("给userDao注入信息")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729111.png",alt:"image-20220413204019564"}})]),v._v(" "),t("p",[t("strong",[v._v("普通属性的注入")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729112.png",alt:"image-20220413204157926"}})]),v._v(" "),t("p",[t("strong",[v._v("初始化方法和销毁方法")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729113.png",alt:"image-20220413204102931"}})]),v._v(" "),t("p",[t("strong",[v._v("原始注解不能全部替代xml配置文件")])]),v._v(" "),t("ul",[t("li",[v._v("非自定义的bean的配置")]),v._v(" "),t("li",[v._v("加载properties文件的配置:"),t("code",[v._v("<context:property-placeholder>")])]),v._v(" "),t("li",[v._v("组件扫描的配置："),t("code",[v._v("<context:component-scan>")])]),v._v(" "),t("li",[v._v("因为其他的文件："),t("code",[v._v("<import>")])])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("新注解")])])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("@Configuration")]),v._v("：用于指定当前类是一个Spring配置类，当创建容器时，会从该类加载注解")]),v._v(" "),t("li",[t("strong",[v._v("@ComponentScan")]),v._v(":用于容器时要扫描的包")]),v._v(" "),t("li",[t("strong",[v._v("@Bean")]),v._v("：使用在方法上，标注将该方法的返回值存储到Spring容器中")]),v._v(" "),t("li",[t("strong",[v._v("@PropertySource")]),v._v(":用于加载properties文件中的配置")])]),v._v(" "),t("blockquote",[t("p",[v._v("Spring整合Junit")])]),v._v(" "),t("p",[t("strong",[v._v("每次进行测试时，都要创建一个容器，都要写两行代码，比较繁琐")])]),v._v(" "),t("ul",[t("li",[v._v("让SpringJuit负责创建Spring容器，将配置文件的名称告诉它")]),v._v(" "),t("li",[v._v("将需要进行测试Bean直接在测试类中进行注入")])]),v._v(" "),t("p",[t("strong",[v._v("Spring集成Junit步骤")])]),v._v(" "),t("ul",[t("li",[v._v("使用spring集成Junit坐标")]),v._v(" "),t("li",[v._v("使用@Runwith注解替换原来的运行期")]),v._v(" "),t("li",[v._v("使用@ContextConfiguration指定配置文件或配置类")]),v._v(" "),t("li",[v._v("使用@Autowired注入需要测试的对象")]),v._v(" "),t("li",[v._v("创建测试方法进行测试")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blogwang.oss-cn-hangzhou.aliyuncs.com/202305201729114.png",alt:"image-20220413202303168"}})]),v._v(" "),t("p",[v._v("Spring集成Web环境")]),v._v(" "),t("p",[t("strong",[v._v("ApplicationContext应用上下文获取方式")])]),v._v(" "),t("p",[v._v("应用上下文对象是通过new ClasspathXmlApplicationContext(spring配置文件)方式获取的，但是每次从容器中获得Bean时都要编写new ClasspathXmlApplicationContext(spring配置文件)，这样的弊端是配置文件加载多次，应用上下文对象创建多次。")]),v._v(" "),t("p",[v._v("在Web项目中，可以使用ServletContextListener监听Web应用的启动，我们可以在Web应用启动时，就加载Spring的配置文件，创建应用上下文对象ApplicationContext，在将其存储到最大的域servletContext域中，这样就可以在任意位置从域中获得应用上下文ApplicationContext对象了。")]),v._v(" "),t("p",[v._v("**Spring提供了一个监听器ContextLoaderListener对原始的Listener进行了封装，该监听器内部加载了Spring配置文件，创建应用上下文对象，并存储到ServletContext域中，提供了一个客户端工具WebApplicationContextUtils供使用者获得应用上下文对象 **")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("配置ContextLoaderListener监听器")])]),v._v(" "),t("li",[t("strong",[v._v("使用WebApplicationContextUtils获得应用上下文")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);