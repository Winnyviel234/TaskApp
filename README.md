# TaskApp --- Gestión de Tareas Académicas

TaskApp es una aplicación móvil híbrida desarrollada con **Ionic** y
**Angular** que permite a los estudiantes organizar sus tareas
académicas desde una interfaz sencilla y adaptable. La aplicación
permite registrar tareas, consultar su información, asignarles una
prioridad, establecer fechas límite y llevar un seguimiento de su
estado.

Este proyecto se desarrolló como práctica académica para aplicar
componentes de Ionic, formularios reactivos de Angular, modelos
TypeScript, servicios y almacenamiento local del navegador.

## Tabla de contenidos

-   [Descripción del proyecto](#descripción-del-proyecto)
-   [Objetivos](#objetivos)
-   [Tecnologías utilizadas](#tecnologías-utilizadas)
-   [Funcionalidades](#funcionalidades)
-   [Requisitos previos](#requisitos-previos)
-   [Instalación](#instalación)
-   [Ejecución en modo desarrollo](#ejecución-en-modo-desarrollo)
-   [Estructura del proyecto](#estructura-del-proyecto)
-   [Modelo de datos](#modelo-de-datos)
-   [Funcionamiento general](#funcionamiento-general)
-   [Persistencia de los datos](#persistencia-de-los-datos)
-   [Validaciones del formulario](#validaciones-del-formulario)
-   [Pruebas recomendadas](#pruebas-recomendadas)
-   [Solución de problemas
    frecuentes](#solución-de-problemas-frecuentes)
-   [Limitaciones conocidas](#limitaciones-conocidas)
-   [Autoría](#autoría)

## Descripción del proyecto

La organización de los deberes y actividades académicas es importante
para cumplir con las fechas de entrega y priorizar el trabajo pendiente.
TaskApp ofrece una forma práctica de registrar y consultar tareas desde
una aplicación con diseño orientado a dispositivos móviles.

La interfaz se construye con componentes de Ionic y la lógica de la
aplicación se implementa con Angular y TypeScript. Las tareas se
administran mediante un servicio, mientras que `localStorage` permite
conservar la información en el navegador utilizado.

## Objetivos

### Objetivo general

Desarrollar una aplicación móvil híbrida básica para la gestión de
tareas académicas utilizando Ionic y Angular.

### Objetivos específicos

-   Construir una interfaz adaptable mediante componentes de Ionic.
-   Mostrar una lista de tareas con título, descripción y prioridad.
-   Registrar tareas mediante un formulario reactivo.
-   Validar que el título sea obligatorio y tenga al menos cinco
    caracteres.
-   Permitir administrar el estado de las tareas y eliminar registros.
-   Organizar la lógica de los datos mediante una interfaz TypeScript y
    un servicio de Angular.
-   Conservar las tareas en el almacenamiento local del navegador.
-   Practicar la estructura, organización y ejecución de un proyecto
    frontend.

## Tecnologías utilizadas

  -----------------------------------------------------------------------
  Tecnología                          Uso en el proyecto
  ----------------------------------- -----------------------------------
  **Ionic**                           Componentes de interfaz orientados
                                      a aplicaciones móviles.

  **Angular**                         Estructura de la aplicación,
                                      formularios y lógica de la
                                      interfaz.

  **TypeScript**                      Tipado de datos, interfaces y
                                      métodos de la aplicación.

  **HTML**                            Estructura de las vistas.

  **SCSS**                            Estilos y presentación visual.

  **Reactive Forms**                  Captura y validación de los datos
                                      del formulario.

  **localStorage**                    Persistencia local de las tareas en
                                      el navegador.

  **npm**                             Instalación y administración de
                                      dependencias.
  -----------------------------------------------------------------------

## Funcionalidades

Las funcionalidades implementadas en la aplicación incluyen:

-   **Listado de tareas:** permite consultar las tareas registradas.
-   **Creación de tareas:** permite introducir un título, una
    descripción y una prioridad.
-   **Validación del título:** impide guardar una tarea cuando el título
    está vacío o no alcanza la longitud mínima establecida.
-   **Prioridad:** permite clasificar una tarea como `Alta`, `Media` o
    `Baja`.
-   **Estado de la tarea:** permite marcar una tarea como completada y
    representar visualmente ese estado.
-   **Edición de tareas:** permite modificar la información de una tarea
    existente.
-   **Eliminación de tareas:** permite retirar tareas de la lista.
-   **Fecha límite:** permite asignar una fecha de vencimiento a una
    tarea.
-   **Indicador del plazo:** muestra información sobre el tiempo
    restante o si la fecha límite ya pasó.
-   **Almacenamiento local:** conserva los datos guardados al recargar
    la aplicación en el mismo navegador.

> **Nota:** la persistencia mediante `localStorage` es local al
> navegador y al origen donde se ejecuta la aplicación. No es una base
> de datos remota ni sincroniza automáticamente las tareas entre
> dispositivos.

## Requisitos previos

Antes de instalar el proyecto, asegúrate de contar con:

1.  **Node.js**, en una versión compatible con las dependencias del
    proyecto.
2.  **npm**, que normalmente se instala junto con Node.js.
3.  **Git**, si deseas clonar el repositorio.
4.  Un navegador web moderno para ejecutar y probar la aplicación.
5.  **Ionic CLI**, recomendado para utilizar el comando `ionic serve`.

Para comprobar si Node.js y npm están instalados, ejecuta en la
terminal:

``` bash
node -v
npm -v
```

Para comprobar Ionic CLI:

``` bash
ionic -v
```

Si Ionic CLI no está instalado, puedes instalarlo globalmente con:

``` bash
npm install -g @ionic/cli
```

Si el comando global no funciona en tu sistema, revisa la configuración
de npm y los permisos de instalación.

## Instalación

### 1. Obtener el código fuente

Clona el repositorio de GitHub:

``` bash
git clone URL_DEL_REPOSITORIO
```

Sustituye `URL_DEL_REPOSITORIO` por la dirección real del repositorio.

Después, entra en la carpeta del proyecto. Por ejemplo, si la carpeta se
llama `TaskApp`:

``` bash
cd TaskApp
```

Si ya tienes el proyecto descargado en tu computadora, abre una terminal
en la carpeta raíz del proyecto.

### 2. Instalar las dependencias

Ejecuta:

``` bash
npm install
```

Este comando instala las dependencias declaradas en los archivos de
configuración del proyecto. La carpeta `node_modules` se genera
localmente; no es necesario subirla a GitHub.

### 3. Comprobar la instalación

Una vez terminada la instalación, verifica que no se hayan mostrado
errores. Si npm informa de problemas, consulta la sección [Solución de
problemas frecuentes](#solución-de-problemas-frecuentes).

## Ejecución en modo desarrollo

Desde la carpeta raíz del proyecto, ejecuta:

``` bash
ionic serve
```

Ionic iniciará un servidor de desarrollo y mostrará una dirección local
en la terminal, normalmente similar a `http://localhost:8100`. Abre la
dirección indicada en el navegador.

Para detener el servidor, vuelve a la terminal y presiona `Ctrl + C`.

> Ejecutar `ionic serve` permite probar la interfaz en el navegador. No
> equivale por sí solo a generar ni instalar una aplicación Android o
> iOS.

## Estructura del proyecto

La estructura puede variar según la configuración generada por Ionic
CLI. Las partes principales utilizadas para gestionar las tareas son:

``` text
TaskApp/
├── src/
│   └── app/
│       ├── home/
│       │   ├── home.page.ts
│       │   ├── home.page.html
│       │   └── home.page.scss
│       ├── models/
│       │   └── tarea.model.ts
│       └── services/
│           └── tarea.service.ts
├── package.json
├── package-lock.json
├── angular.json
├── ionic.config.json
├── tsconfig.json
├── README.md
└── .gitignore
```

### Responsabilidad de los archivos principales

-   **`src/app/home/home.page.ts`**: contiene la lógica de la página
    principal, el formulario, la creación y edición de tareas y los
    métodos relacionados con su visualización.
-   **`src/app/home/home.page.html`**: define la estructura visual de la
    página y los elementos de Ionic que se muestran.
-   **`src/app/home/home.page.scss`**: contiene los estilos de la
    página.
-   **`src/app/models/tarea.model.ts`**: declara los tipos e interfaces
    utilizados para representar las tareas.
-   **`src/app/services/tarea.service.ts`**: centraliza las operaciones
    sobre las tareas y su almacenamiento local.
-   **`package.json`**: registra los scripts y las dependencias del
    proyecto.
-   **`package-lock.json`**: registra la resolución de las dependencias
    instaladas.
-   **`angular.json`** e **`ionic.config.json`**: contienen
    configuraciones de Angular e Ionic.

## Modelo de datos

La interfaz `Tarea` define la estructura principal de una tarea. El
modelo incluye los campos básicos solicitados en la práctica y
propiedades adicionales utilizadas para ampliar la funcionalidad.

  Campo           Descripción
  --------------- -----------------------------------------------
  `id`            Identificador numérico de la tarea.
  `titulo`        Nombre breve de la tarea.
  `descripcion`   Información complementaria.
  `prioridad`     Nivel de prioridad: `Alta`, `Media` o `Baja`.
  `completada`    Indica si la tarea está terminada.
  `fechaLimite`   Fecha de vencimiento, cuando se especifica.

El modelo también puede incluir propiedades opcionales para
funcionalidades adicionales, como favoritos, categorías, subtareas o
fecha de creación, según la versión del código.

## Funcionamiento general

### Registro de una tarea

1.  El usuario abre el formulario de creación.
2.  Introduce el título y, si lo desea, la descripción.
3.  Selecciona la prioridad y puede indicar una fecha límite.
4.  Angular valida los campos del formulario reactivo.
5.  Si los datos son válidos, la página envía la información al
    servicio.
6.  El servicio asigna un identificador, establece la tarea como no
    completada y guarda la lista actualizada en `localStorage`.

### Edición de una tarea

1.  El usuario selecciona una tarea para editarla.
2.  El formulario se rellena con los datos existentes.
3.  El usuario modifica los campos necesarios.
4.  Al guardar, el servicio actualiza la tarea correspondiente y
    conserva los cambios.

### Completar o eliminar una tarea

La interfaz permite cambiar el estado de una tarea. Cuando se marca como
completada, su presentación visual debe reflejar ese estado. La opción
de eliminación retira la tarea de la lista y actualiza el almacenamiento
local.

### Fechas límite

Cuando una tarea tiene una fecha límite, la interfaz puede mostrar la
fecha y un indicador del plazo. El indicador distingue entre una fecha
futura, el día del vencimiento y una fecha que ya pasó. Las tareas sin
fecha límite no deben mostrar un indicador de vencimiento.

## Persistencia de los datos

El servicio utiliza `localStorage` para guardar el listado de tareas en
el navegador.

En términos generales, el proceso es el siguiente:

1.  Al iniciar el servicio, intenta recuperar los datos guardados.
2.  Si encuentra información almacenada, la convierte nuevamente en una
    lista de tareas.
3.  Cuando se crea, actualiza, completa o elimina una tarea, guarda la
    lista actualizada.
4.  Al recargar la página en el mismo navegador y origen, los datos
    guardados pueden recuperarse.

**Importante:** borrar los datos del sitio en el navegador puede
eliminar las tareas almacenadas. Como los datos no se guardan en un
servidor, no existe sincronización automática entre navegadores o
dispositivos.

## Validaciones del formulario

El formulario utiliza `ReactiveFormsModule` y validadores de Angular.

-   **Título obligatorio:** no se permite registrar una tarea con el
    título vacío.
-   **Longitud mínima:** el título debe tener al menos cinco caracteres.
-   **Prioridad:** se selecciona entre los valores admitidos por el
    modelo.
-   **Descripción y fecha límite:** son datos complementarios y pueden
    dejarse vacíos si el formulario está configurado para permitirlo.

Cuando el formulario no cumple las validaciones, la aplicación debe
indicar o marcar los campos que necesitan corrección y evitar el
registro hasta que los datos sean válidos.

## Pruebas recomendadas

Antes de entregar el proyecto, conviene realizar las siguientes
comprobaciones manuales:

-   [ ] La página principal carga correctamente.
-   [ ] Se muestra la lista de tareas.
-   [ ] Es posible crear una tarea con datos válidos.
-   [ ] No se permite guardar un título vacío.
-   [ ] No se permite guardar un título de menos de cinco caracteres.
-   [ ] La prioridad seleccionada se muestra correctamente.
-   [ ] Es posible editar una tarea.
-   [ ] Es posible marcar una tarea como completada y ver el cambio
    visual.
-   [ ] Es posible eliminar una tarea.
-   [ ] Una tarea con fecha límite muestra la información
    correspondiente.
-   [ ] Las tareas continúan disponibles después de recargar la página.
-   [ ] La consola del navegador y la terminal no muestran errores que
    impidan utilizar la aplicación.

## Solución de problemas frecuentes

### `ionic` no se reconoce como comando

Comprueba si Ionic CLI está instalado:

``` bash
npm install -g @ionic/cli
```

Después, abre una terminal nueva y ejecuta:

``` bash
ionic -v
```

### `npm install` muestra errores

Comprueba que estás en la carpeta raíz del proyecto, donde se encuentra
`package.json`. Verifica también las versiones de Node.js y npm y
utiliza una versión compatible con las dependencias del proyecto.

### La aplicación no inicia

Revisa los mensajes que aparecen en la terminal al ejecutar:

``` bash
ionic serve
```

Corrige primero los errores de instalación o compilación que se
indiquen. Si el puerto predeterminado está ocupado, consulta el mensaje
de Ionic y utiliza la opción de puerto que corresponda.

### Las tareas no se conservan al recargar

Comprueba que el servicio guarda los cambios en `localStorage` y que la
aplicación se abre en el mismo navegador y origen. Si se borran los
datos del sitio o se cambia el origen, el navegador puede no conservar o
no mostrar el almacenamiento anterior.

### Los cambios de código no aparecen

Guarda los archivos modificados y revisa la terminal por si Angular
muestra errores de compilación. Si es necesario, detén el servidor con
`Ctrl + C` y vuelve a ejecutar `ionic serve`.

## Limitaciones conocidas

-   La persistencia se realiza en el navegador mediante `localStorage`;
    no hay sincronización con una base de datos remota.
-   Los datos almacenados dependen del navegador y del origen donde se
    ejecuta la aplicación.
-   El comando `ionic serve` está orientado al desarrollo y las pruebas
    en navegador; no genera por sí solo un paquete instalable para un
    dispositivo móvil.
-   La aplicación está concebida como una práctica académica y no como
    un sistema institucional de producción.

## Autoría

**Proyecto:** TaskApp --- Gestión de Tareas Académicas\
**Tecnologías principales:** Ionic, Angular y TypeScript\
**Propósito:** práctica académica de desarrollo de aplicaciones móviles
híbridas.

------------------------------------------------------------------------

Este README describe la estructura y el funcionamiento previsto del
proyecto. Antes de publicarlo, verifica que los nombres de archivos, las
funciones descritas y las instrucciones coincidan con la versión final
del código que subirás a GitHub.
