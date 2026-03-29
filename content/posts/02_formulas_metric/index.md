+++
title = 'Fórmulas científicas en la web con LaTeX y MathJax'
date = '2026-03-06T03:36:35-05:00'
draft = false
description = 'Fórmulas con lenguaje LaTeX renderizados en la web usando MathJax.'
tags = ['LaTeX', 'investigación']
categories = []

weight = 2
showtoc = true
ShowPostNavLinks = true

math = true

+++

## ¿Qué es LaTeX?

LaTeX es un sistema de composición de textos de alta calidad, utilizado mayormente en documentos técnicos o científicos de todo tipo de tamaños y empleandose en cualquier formato editorial.

Es muy utilizado para la composición de artículos académicos, tesis y libros técnicos, donde la calidad tipográfica son comparables a la de una editorial científica de primera línea. Es considerado un programa profesional para creación de documentos donde su principal ventaja es que siempre generar un único resultado, el cual puede ser exportado a numerosos formatos. Tiene a su vez en cuenta numerosos aspectos tipográficos editables.

A pesar de ello, lo que nos trae aquí es una parte pequeña de ese universo, las fórmulas. Cuando redactamos un documento técnico científico hay momentos donde debemos presentar una fórmula. Usualmente se trabaja con Word ya que es el más común de todos al ser popular en el sistema Windows. A continuación te presento una forma sencilla de cómo usar la IA de ChatGPT para generar la fórmula y usarla en Word. 

![alt text](Prueba-2.gif)

Solo fue necesario copiarlo en una sección de ecuación y dar enter para obtener la fórmula en Word sin problemas. Ahora presentaré las fórmulas renderizadas en esta misma página.

## Representando fórmulas en la web con MathJax

MathJax permite renderizar fórmulas LaTeX en la web, con la funcionalidad adicional de poder copiar
la expresión para reutilizarla. Si necesitas usar la fórmula en Word o en un documento LaTeX, solo la copias y pegas donde lo necesites.

Si se tiene el código LaTeX para generar la fórmula del Root Mean Square Error (RMSE):
```latex
$$
\mathrm{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}
$$
```

y su versión renderizada

$$
\mathrm{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}
$$

Para poder utilizar esta fórmula puedes dar click derecho sobre la fórmula renderizada, el cual abrirá un menú donde nos interesa el ``Copy to Clipboard > TeX Commands``. 

![alt text](image-1.png#center)

## Ejemplos de fórmulas

### Índice de calidad del suelo ponderado (SQIw)

Índice de Calidad del Suelo ponderado (weighted additive approach):
 
$$SQI_w = \sum_{i=1}^{n} W_i\,N_i$$
 
donde $n$ es el número total de variables, $W_i$ es el peso asignado a cada indicador
(derivado del Análisis de Componentes Principales ACP), y $N_i$ es el puntaje normalizado del indicador. El índice resultante
se clasifica en cinco categorías con intervalos iguales de 0.2:
 
| Clase | Rango SQIw |
|-------|-----------|
| Muy pobre | < 0.20 |
| Pobre | 0.20 – 0.40 |
| Aceptable | 0.40 – 0.60 |
| Bueno | 0.60 – 0.80 |
| Óptimo | ≥ 0.80 |

Expresión específica del SQIw para el valle de Bella Unión:
 
$$SQI_w = 0.212\,S_{ECe} + 0.204\,S_{pH} + 0.177\,S_{Kav} + 0.160\,S_{Sand} + 0.123\,S_{OM} + 0.123\,S_{Pav}$$
 
donde $S_i$ representa el puntaje normalizado (0.1–1) de cada indicador.

#### Funciones de puntuación (normalización de indicadores)

Función "más es mejor" (*more is better*):
 
$$M(x) = \begin{cases} 0.1 & \text{si } x < x_1 \\ 0.1 + 0.9\,\dfrac{x - x_1}{x_2 - x_1} & \text{si } x_1 \leq x \leq x_2 \\ 1 & \text{si } x > x_2 \end{cases}$$
 
Función "menos es mejor" (*less is better*):
 
$$L(x) = \begin{cases} 1 & \text{si } x < x_1 \\ 1 - 0.9\,\dfrac{x - x_1}{x_2 - x_1} & \text{si } x_1 \leq x \leq x_2 \\ 0.1 & \text{si } x > x_2 \end{cases}$$

donde $M(x)$ y $L(x)$ son las funciones de puntuación, con valores restringidos
entre 0.1 y 1.0. $x$ es el valor medido del indicador, y $x_1$, $x_2$ son los valores
umbral (puntos de inflexión) de la curva.

### Autocorrelación espacial
 
Índice I de Moran (Moran, 1950):
 
$$I = \frac{n}{\displaystyle\sum_{i=1}^{n}\sum_{j=1}^{n} w_{ij}} \cdot \frac{\displaystyle\sum_{i=1}^{n}\sum_{j=1}^{n} w_{ij}(y_i - \bar{y})(y_j - \bar{y})}{\displaystyle\sum_{i=1}^{n}(y_i - \bar{y})^2}$$
 
donde $n$ es el número de observaciones, $w_{ij}$ es el peso espacial entre las
muestras $i$ y $j$, $y_i$ es el valor muestreado en la localización $i$,
y $\bar{y}$ es la media aritmética de todos los valores muestreados.
$I \in [-1, +1]$: valores positivos indican agrupamiento espacial, valores cercanos
a cero indican distribución aleatoria, y valores negativos indican dispersión.

### Interpolación espacial

#### Semivariograma empírico
 
$$\gamma(h) = \frac{1}{2}\,\mathbb{E}\!\left[z(x) - z(x+h)\right]^2$$
 
donde $\mathbb{E}$ representa la varianza esperada, y $z(x)$, $z(x+h)$ son
pares de valores separados por la distancia $h$.

#### Kriging de regresión
 
Predicción por kriging de regresión en la localización $S_0$:
 
$$Z(S_0) = m(S_0) + e(S_0) = \sum_{k=1}^{p} \beta_k\,q_k(S_0) + \sum_{i=1}^{N} \lambda_i\,e(S_i)$$
 
donde $\beta_k$ son los coeficientes de regresión asociados a $p$ covariables $q_k$,
$\lambda_i$ son los pesos de kriging, $N$ es el número de observaciones,
y $e(S_i)$ son los residuos de la regresión en cada punto $S_i$.
 
#### Ponderación por distancia inversa (IDW)

$$\hat{y}_p = \frac{\displaystyle\sum_{i=1}^{n} \frac{y_i}{d_i^r}}{\displaystyle\sum_{i=1}^{n} \frac{1}{d_i^r}}$$
 
donde $\hat{y}_p$ es el valor predicho en el punto no muestreado $p$;
$y_i$ es el valor observado en el punto muestreado $i$;
$d_i$ es la distancia entre los puntos $p$ e $i$;
$r$ es el parámetro de potencia (fijado en $r = 2$);
y $n$ es el número de puntos vecinos usados para la interpolación (máximo 12).

### Métricas de validación cruzada

Raíz del error cuadrático medio (RMSE):
 
$$RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}$$
 
Error absoluto medio (MAE):
 
$$MAE = \frac{1}{n}\sum_{i=1}^{n}\left|y_i - \hat{y}_i\right|$$
 
Coeficiente de determinación ($R^2$):
 
$$R^2 = 1 - \frac{\displaystyle\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{\displaystyle\sum_{i=1}^{n}(y_i - \bar{y})^2}$$
 
Error medio (ME, sesgo):
 
$$ME = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)$$
 
donde $y_i$ es el valor observado en la localización $i$, $\hat{y}_i$ es el valor
predicho mediante validación cruzada, y $\bar{y}$ es la media de todos los
valores observados.

### Hidrología y Teledetección: Modelo METRIC

Mapping evapotranspiration at high resolution with internalized calibration (METRIC) es un modelo de procesamiento de imágenes satelitales para calcular la evapotranspiración (ET) como residuo del balance energético superficial (Allen et al., 2007). Este modelo tiene fórmulas interesantes de representar. A continuación presentaré algunas de las más importantes:

#### Balance de energía superficial

$$LE = R_n - G - H$$

#### Radiación neta en la superficie

$$
R_n = (1- \alpha)R_{S\downarrow} + (R_{L\downarrow} - R_{L\uparrow}) - (1- \varepsilon_0)R_{L\downarrow}
$$

donde:
- $R_n$ : Flujo de radiación neta 
- $\alpha$ : Albedo de superficie $[-]$
- $R_{S\downarrow}$ : Radiación de onda corta entrante 
- $R_{L\downarrow}$ : Radiación de onda larga entrante 
- $R_{L\uparrow}$ : Radiación de onda larga saliente 
- $\epsilon_0$ : Emisividad del ancho de banda en la superficie

El término $(1- \epsilon_0)R_{L\downarrow}$ representa la fracción de radiación entrante de onda larga (incoming long-wave radiation) reflejada desde la superficie. Todas las radiaciones se miden en $W\;m^{-2}$.

#### Flujo de calor del suelo

$$
\frac{G}{R_n} = ( T_s - 273.15 ) (0.0038 + 0.0074 \alpha ) (1-0.98 \; \text{NDVI}^4) \; \; \; \; \text{(26)}
$$

donde:
- $T_s$ : Temperatura de la superficie $[K]$
- $\alpha$  : Albedo de la superficie $[-]$

#### Flujo de calor sensible

$$
H = \rho_{\text{air}} C_p \frac{dT}{ r_{\text{ah}} }
$$

donde:
- $\rho_{\text{air}}$: Air density $[kg \; m^{-3}]$
- $C_p$: Air specific heat 
- $dT$: Temperature difference ($T_1$ - $T_2$) between two heights ($z_1$ and $z_2$) 
- $r_{\text{ah}}$: Aerodynamic resistance to heat transport 

#### Cálculo de la evapotranspiración

ET instantánea en el momento de la imagen satelital:

$$ET_{inst} = \frac{3600 \cdot LE}{\lambda\,\rho_w}$$

Calor latente de vaporización:

$$\lambda = \left(2.501 - 0.00236\,(T_s - 273.15)\right) \times 10^6$$

## Referencias

Sitios web
- The LaTeX Project: An introduction to LaTeX. [Enlace](https://www.latex-project.org/about/)
- Universidad de Alicante: Herramientas para la investigación - ¿Qué es LaTeX?. [Enlace](https://desarrolloweb.dlsi.ua.es/cursos/2015/herramientas-investigacion/que-es-latex)
- MathJax - Beautiful and accessible math in all browsers. [Enlace](https://www.mathjax.org/)

Artículos científicos
- Poma-Chamana, R., Vilca-Gamarra, C., Hermoza, N., Mercado, R., Mejía, S., Rengifo, R., & Quispe, K. (2025). Estimation and mapping of soil fertility index in arid agricultural environments of the Tambo Valley using regression kriging. *Frontiers in Soil Science*, 5, 1706974. [Enlace](https://doi.org/10.3389/fsoil.2025.1706974)
- Poma-Chamana, R., Vilca-Gamarra, C., Linares-Escapa, S., Puma-Huacani, K., Carrillo, A., Villalta-Soto, M., & Quispe, K. (2026). Soil Quality in Olive Orchards of Southern Peru Using a Weighted Soil Quality Index (SQIw): Constraints by Salinity, Organic Matter and Sustainable Management Approach. *Frontiers in Soil Science*, 6, 1724235. [Enlace](https://doi.org/10.3389/fsoil.2026.1724235)
- Allen, R. G., Tasumi, M., & Trezza, R. (2007). Satellite-based energy balance for mapping evapotranspiration with internalized calibration (METRIC)—Model. *Journal of irrigation and drainage engineering*, 133(4), 380-394. [Enlace](https://www.researchgate.net/publication/228615269_Satellite-Based_Energy_Balance_for_Mapping_Evapotranspiration_With_Internalized_Calibration_METRIC_-_Model)

Muchas gracias por leer. Te invito a revisar los demás posts mediante los tags aquí abajo.

