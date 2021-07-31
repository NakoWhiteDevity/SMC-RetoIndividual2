# Semana2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

# COMO TRABAJAR CON EL REPOSITORIO:
Para trabajar con el repositorio, lo primero que necesitais es tener instalado en vuestro equipo el AngularCLI, el cual es un paquete de NPM : https://angular.io/cli
Para ejecutar un servidor de desarrollo con el proyecto, teneis que ejecutar en una terminal en la raíz del proyecto : `ng serve`

# MI DECISIÓN DE PORQUE HE USADO ESTAS TECNOLOGÍAS:
La razón de porque he empleado Angular es porque es el framework de desarrollo frontend donde presento mayor destreza, y el que deseo seguir aprendiendo y masterizando. Cierto es que tiene algunas desventajas respecto a React, como que por ejemplo a la hora de integrar librerias de JS es algo mas obtuso, pues se deben de respetar varias convenciones del framework, pero por ahora no me es un pretexto de gravedad como para considerar cambiar a otra tecnologia con lo que me queda por aprender de esta.
Otra tecnologia que en este proyecto he logrado implementar y usar ha sido la libreria de representación de datos Chart.js , bajo otra libreria denominada ng2-charts, la cual se emplea para señalar a los datos desde el template a la logica de cada componente y para respetar las convenciones de Angular, pues de lo contrario deberia manipular DOM, y eso desde Angular es con su libreria nativa Renderer2, lo cual supone complicar las cosas existiendo una solución consolidada. He aprendido mucho de Dataviz en este proyecto. Por último empleamos el paquete angular-cli-ghpages, que actualmente es la solución mas rápida para subir un proyecto de Angular a GitHub pages.

# ESTRUCTURA DEL PROYECTO:
Todo el proyecto esta en la carpeta src. En assets se encuentran iconos y fotografías. En la carpeta app se encuentra la raiz la cual contiene el renderizado del resto del proyecto, así como el módulo que contiene parte de la paquetería y conexión de componentes de la aplicación. El componente App es el primer componente que genera Angular y que se emplea para colgar sobre el el proyecto. La carpeta componentes tiene el componente de barra lateral, el de principal (donde deberia estar el contenido de la primera semana), y el de cromos, donde estan el reto de esta semana. Por último la carpeta de servicios incluye toda la configuración e información de las gráficas, la cual es solicitada a través del template de cromos.
