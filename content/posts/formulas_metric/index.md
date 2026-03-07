+++
title = 'Escribir fórmulas estilo "publicación" usando LateX'
date = '2026-03-06T03:36:35-05:00'
draft = false
description = 'Fórmulas con lenguaje Latex renderizados en la web usando Mathjax.'
tags = ['Latex']
categories = []

weight = 4
showtoc = true
ShowPostNavLinks = true

math = true

+++

## Lenguaje Latex



## Qué es Mathjax

Mathjax permite renderizar fórmulas Latex en la web, con la funcionalidad adicional de poder copiar
la expresión para reutilizar en otro lado. De ser el caso que se necesite usar la fórmula en 
Word o sino en otro documento Latex, en lugar de escribirlo desde cero, puedes copiarlo y pegarlo con un par de clicks.

![alt text](image.png)

## Representación de fórmulas del modelo METRIC

### Descripción del modelo

Mapping evapotranspiration at high resolution with internalized calibration (METRIC) is a satellite-based image-processing model for calculating evapotranspiration (ET) as a residual of the surface energy balance. METRIC uses as its foundation the pioneering SEBAL energy balance process developed in The Netherlands by Bastiaanssen, where the near-surface temperature gradients are an indexed function of radiometric surface temperature, thereby eliminating the need for absolutely accurate surface temperature and the need for air-temperature measurements (Allen et al., 2007).

### Balance de energía

Actual net radiation flux at the surface (Rn) represents the radiant energy at the surface that is partitioned into H, G, and LE. Rn is computed by subtracting all outgoing radiant fluxes from all incoming radiant fluxes and includes solar and thermal radiation.

### Radiación neta

The net radiation flux at the surface ($R_n$) represents the actual radiant energy available at the surface. $\eqref{eq:rn1}$

Se resume de la siguiente manera:
$$
\text{Net surface radiation} = \text{gains} - \text{losses}
$$

De forma detallada:
$$
R_n = R_{S\downarrow} - \alpha R_{S\downarrow} + R_{L\downarrow} - R_{L\uparrow} - (1- \varepsilon_0)R_{L\downarrow} \label{eq:rn1} \tag{1}
$$

el cual puede desarrollarse como:
$$
R_n = (1- \alpha)R_{S\downarrow} + (R_{L\downarrow} - R_{L\uparrow}) - (1- \varepsilon_0)R_{L\downarrow} \label{eq:rn2} \tag{2}
$$



Dónde:

- $R_n$ : Flujo de radiación neta $[W/m^2]$
- $\alpha$ : Albedo de superficie $[-]$
- $R_{S\downarrow}$ : Radiación de onda corta entrante $[W/m^2]$
- $R_{L\downarrow}$ : Radiación de onda larga entrante $[W/m^2]$
- $R_{L\uparrow}$ : Radiación de onda larga saliente $[W/m^2]$
- $\epsilon_0$ : Emisividad del ancho de banda en la superficie $[W/m^2]$

El término $(1- \epsilon_0)R_{L\downarrow}$ representa la fracción de radiación entrante de onda larga (incoming long-wave radiation) reflejada desde la superficie.

### Flujo de calor del suelo
Soil heat flux is the rate of heat storage in the soil and vegetation due to conduction. General METRIC applications compute G as a ratio G/Rn using an empirical equation by Bastiaanssen (2000) representing values near midday.

$$
\frac{G}{R_n} = ( T_s - 273.15 ) (0.0038 + 0.0074 \alpha ) (1-0.98 \; \text{NDVI}^4) \; \; \; \; \text{(26)}
$$

donde:
- $T_s$ : surface temperature
- $\alpha$  : surface albedo 

G is then calculated by multiplying G/Rn by Rn.

### Flujo de calor sensible

Sensible heat flux is the rate of heat loss to the air by convection and conduction, due to a temperature difference. It is computed using the following one-dimensional, aerodynamic, temperature gradient based equation for heat transport:

$$
H = \rho_{\text{air}} C_p \frac{dT}{ r_{\text{ah}} }
$$

donde:
- $\rho_{\text{air}}$: air density $[kg \; m^{-3}]$
- $C_p$: air specific heat 
- $dT$: temperature difference (T1 - T2) between two heights (z1 and z2) 
- $r_{\text{ah}}$: aerodynamic resistance to heat transport 

## Referencias


