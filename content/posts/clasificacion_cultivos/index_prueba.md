+++
title = 'Clasificación de cultivos agrícolas con Teledetección'
date = '2026-03-06T03:36:20-05:00'
draft = false
description = "Recopilar información acerca de Clasificación de cultivos agrícolas."
tags = ['Teledetección']
categories = []

weight = 6
showtoc = true
ShowPostNavLinks = true
+++

<figure>
  <img src="image.png" alt="Imagen Sentinel-2">
  <figcaption>Cultivos clasificados mediante modelo Random Forest (Immitzer <i>et al</i>., 2016)</figcaption>
</figure>

## Importancia

La clasificación de cultivos tiene como fin el presentar un mapa en donde se represente los cultivos clasificados en una zona de estudio determinada.

A continuación presentaré una recopilación de "Importancias" según diversos autores:

- [(2018) Sentinel-2 cropland mapping using pixel-based and object-based time-weighted dynamic time warping analysis](https://www.sciencedirect.com/science/article/pii/S0034425717304686):
  - El aumento de población estimado de 7.3 Billones a 8.7 billones para el 2030, 9.7 billones para el 2050 y 11.2 billones para el 2100 impactará sobre los sistemas de provisión de alimentos a nivel mundial.
  - Metodologías eficientes sobre el mapeo de cultivos son esenciales para la implementación de prácticas sostenibles en agricultura y para el monitoreo periódico de cultivos.
  - Disponibilidad de metodologías con el propósito de cumplir los objetivos propuestos por las Naciones Unidas de Desarrollo Sostenible: No pobreza y cero hambre.
- [(2012) Crop type mapping using spectral–temporal profiles and phenological information](http://dx.doi.org/10.1016/j.compag.2012.07.015):
  - Poseer información multianual y espacial es requisito para diversas aplicaciones ambientales, para apoyar el modelado y gestión del sistema agroambiental desde escala regional hasta la nacional.
  - Muchas aplicaciones agroambientales, como la estimación de daños por inundaciones agrícolas o el modelado de la calidad del agua, requieren datos de cultivos distribuidos espacialmente.
- [(2020) Mapping cropping intensity in China using time series Landsat and Sentinel-2 images and Google Earth Engine](https://doi.org/10.1016/j.rse.2019.111624):
  - La intensidad del cultivo es un factor importante que contribuye a la producción de cultivos y la seguridad alimentaria a escalas local, regional y nacional, y es una variable de datos de entrada crítica para muchos modelos de clima, superficie terrestre y cultivos globales. Por ello se debe generar anualmente mapas de intensidad del cultivo.
  - Los datos de intensidad de cultivo pueden mejorar en gran medida las evaluaciones y predicciones de la producción de alimentos.
- Extracto de la RESOLUCIÓN MINISTERIAL N° 0322-2020-MIDAGRI acerca de la importancia del [Mapa Nacional de Superficie Agrícola del Perú](https://siea.midagri.gob.pe/portal/normas):
  - ... actualmente, se dispone de imágenes satelitales gratuitas y de alta resolución espacial cuyo procesamiento permite el mapeo y medición más precisa de la superficie agrícola en todo el territorio nacional, resultando una fuente objetiva de referencia y que permite mejorar significativamente la medición de la superficie agrícola y la información estadística derivada de ella sobre la actividad agraria, convirtiéndose en una herramienta potente para los procesos de planificación de las intervenciones, y de las operaciones estadísticas del Sector.
  - ... se señala que la Estrategia Global para el Mejoramiento de las Estadísticas Agropecuarias rurales (FAO del 2011), declara la necesidad de vincular las dimensiones económicas, sociales y ambientales en las investigaciones estadísticas rurales, recomendando que se utilicen imágenes satelitales de la superficie terrestre del país que permiten clasificar el uso del suelo , tales como tierras de cultivo, pastizales, etc., a fin de monitorear el uso de la tierra, el cálculo de las áreas de cultivo y su dinámica, y proporcione información actualizada que permita monitorear los cambios en el uso del suelo, cuantificar siembras y cosechas, planificar infraestructura de riego, estimar pérdidas ante desastres naturales, entre otros.
  - El Mapa de la Superficie Agrícola del Perú, se ha constituido como base fundamental para la ejecución de operaciones estadísticas a nivel nacional, el monitoreo de los cultivos de importancia nacional, así como la integración de las operaciones estadísticas a partir de un solo marco muestra. De esta manera, se busca generar información estadística agraria oportuna y confiable, para la focalización de las intervenciones y la toma de decisiones de los productores agrarios.

## Clasificación

Comenzaremos definiendo los tipos de clasificaciones que existen relacionados con el tema, siendo los principales la Clasificación estadística y la Clasificación en Aprendizaje Automático (Machine Learning).

### Clasificación estadística
La clasificación es el problema de identificar a cuál de un conjunto de categorías (subpoblaciones) pertenece una nueva observación, sobre la base de un conjunto de datos de formación que contiene observaciones (o instancias) cuya categoría de miembros es conocida. ([Revisar](https://es.wikipedia.org/wiki/Clasificaci%C3%B3n_estad%C3%ADstica))

### Clasificación en Percepción Remota
Según [INEGI](https://rde.inegi.org.mx/rde_16/doctos/rde_16_art5.pdf), la clasificación de cultivos puede ser abordada como un problema de reconocimiento de patrones que utiliza procesamiento de imágenes y que está formado por varias etapas:
- Selección del método o medio a través del cual se obtiene la imagen,
- Procesamiento de ésta (imagen) como en la extracción de rasgos
- Selección y aplicación de algoritmos de clasificación.

### Clasificación en Aprendizaje Automático
La clasificación está considerada como un caso de aprendizaje supervisado, es decir, un aprendizaje en el que se dispone de un conjunto de observaciones correctamente identificadas. El procedimiento no supervisado se conoce como clustering, e implica agrupar los datos y categorías basadas en alguna medida de similitud o distancia inherente.

En este campo, las observaciones se conocen a menudo como instancias, las variables explicativas se denominan características (agrupadas en un vector de características) y las posibles categorías a predecir son clases.

Un algoritmo que implementa la clasificación, especialmente en una implementación concreta, se conoce como un clasificador. El término "clasificación" algunas veces refiere a la función matemática, implementada por un algoritmo de clasificación, que asocia los datos de entrada a una categoría.

<!-- ## Apuntes -->

<!-- [Sensoramiento Remoto, Percepción Remota o Teledetección](http://127.0.0.1:5500/blog_clasificacion.html#apunte1)
[1] Jensen, J. R. (2013). Remote Sensing of the Environment: Pearson New International Edition: An Earth Resource Perspective (2nd edition). Pearson Education Limited.

- Medición in situ
- Los datos recolectados en campo (in situ) son comúnmente conocidos como datos verdaderos del terreno (ground truth data). Éste procedimiento de recolección no está libre de errores por lo que es preferible referirse a los datos como datos de referencia in situ (in situ ground reference data), ya que contiene errores.
- Definición de Teledetección (Remote Sensing)
- La Teledetección es el registro sin contacto de información de las regiones del espectro electromagnético ultravioleta, visible, infrarojo y microondas mediante instrumentos tales como cámaras, escáneres, láseres, matrices lineales y/o matrices de áreas ubicadas en plataformas como aeronaves o naves espacialesm y el análisis de la información adquirida mediante el procesamiento de imágenes visuales y digitales.
- Las mediciones de energía electromagnética deben convertirse en información usando técnicas de procesamiento de imágenes digitales o visuales.
- La Teledetección se lleva a cabo mediante un instrumento comúnmente referido como sensor. La mayoría de los instrumentos registran la radiación de energía electromagnética (EMR) que viaja a la velocidad de la luz (3 x 10^8 m s^-1) desde su fuente o indirectamente reflejada hacia el sensor. Los cambios en el EMR se convierten en una fuente valiosa de datos para interpretar importantes propiedades de un fenómeno (temperatura, color, etc). También se usa otros campos de fuerza tales como el ondas acústicas (sonar). Sin embargo, la mayoría de datos remotamente recolectados son resultantes de sensores que registran energía electromagnética.
- ¿A qué distancia se considera Teledetección?
- No hay una clara distinción acerca de que tanta distancia debe ser para considerarse Teledetección. La distancia entre el objeto y el instrumento puede ser de 1 cm, 1 m, 100 m o hasta más de 1 millón de metros. Se menciona que la Teledetección y técnicas de procesamiento de imágenes pueden ser utilizados para analizar el "espacio interior" mediante microscopios e instrumentos de rayos-x.
- Ventajas
- El sensor al solo registrar pasivamente la energía electromagnética, no perturba el objeto o área de interés. Los sensores están programados para recolectar datos sistemáticamente lo cual reduce el error por sampleo in situ en investigaciones.
- La Teledetección provee de información biofísica fundamental; incluyendo localizaciones x,y; elevaciones y profundidades; biomasa; temperatura; contenido de humedad, etc.
- En general, provee de información a otras ciencias para que conduzcan investigaciones científicas mediante uso de softwares GIS.
- Limitaciones
- No provee toda la información requerida para una investigación científica en Física, Biología o Ciencias Sociales. La Teledetección solo brinda información espacial, espectral y temporal de manera que es eficiente y económico. A la hora de elaborar el sistema adecuado para recolectar datos, el mismo ser humano puede inducir errores al instrumento y parámetros especificados a la misión (satélites); también pueden descalibrarse.
- Proceso de recolección de datos con Teledetección
  1. La hipótesis a ser probada es definida usando un tipo específico de lógica (inductivo, deductivo, etc) y un apropiado modelo de procesamiento (determinístico, estocástico, etc).
  2. Es necesario la colecta de datos in situ para calibrar el sensor o para juzgar las características recolectadas por el mismo: geometría, radiometría y temática.
  3. Los datos recolectados remotamente son procesados usando:
- procesamiento de imágenes analógicas
- procesamiento de imágenes digitales
- modelado y
- visualización en n-dimensiones
1. Metadatos, línea de procesamiento y precisión de la información se proporcionan y los resultados se comunican mediante imágenes, gráficos, tablas estadísticas, bases de datos SIG, Sistemas de soport de decisiones espaciales (SDSS), etc. -->

## Referencias

- [Clasificación de cultivos agrícolas - INEGI](https://rde.inegi.org.mx/rde_16/doctos/rde_16_art5.pdf)
- [Superficie Agrícola Oficial - SIEA MIDAGRI](https://siea.midagri.gob.pe/portal/normas)
- [Remote sensing technology for crop insurance – Applications and limitations](https://www.slideshare.net/CIMMYT/herbold-cimmyt-remote-sensing-technology-for-crop-insurancedecember-2013)
- [2012] [Crop type mapping using spectral–temporal profiles and phenological information](http://dx.doi.org/10.1016/j.compag.2012.07.015)
- [2017] [Detection of cropland field parcels from Landsat imagery](https://doi.org/10.1016/j.rse.2017.08.027)
- [2019] [Satellite Image Analysis: Clustering and Classification](https://link.springer.com/book/10.1007/978-981-13-6424-2)
- [2019] [Intra-annual reflectance composites from Sentinel-2 and Landsat for national-scale crop and land cover mapping](https://doi.org/10.1016/j.rse.2018.10.031)
- [[1](https://www.amazon.com/Remote-Sensing-Environment-International-Perspective/dp/1292021705)] Jensen, J. R. (2013). Remote Sensing of the Environment: Pearson New International Edition: An Earth Resource Perspective (2nd edition). Pearson Education Limited.
- [[2](https://link.springer.com/book/10.1007/978-981-13-6424-2)] Borra, S., Thanki, R., & Dey, N. (2019). Satellite Image Analysis: Clustering and Classification. SpringerBriefs in Applied Sciences and Technology, 5-7. https://doi.org/10.1007/978-981-13-6424-2

Muchas gracias por leer. Te invito a revisar los demás posts mediante los tags aquí abajo.
