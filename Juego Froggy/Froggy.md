# Resumen de la doc de Flexbox y la comparación con cada uno de los niveles del juego Froggy

## Resumen


En React Native, Flexbox funciona de manera similar a como lo hace en CSS en la web, pero con algunas diferencias en los valores predeterminados de las propiedades. Por ejemplo, flexDirection tiene un valor predeterminado de column en lugar de row, alignContent tiene un valor predeterminado de flex-start en lugar de stretch, y flexShrink tiene un valor predeterminado de 0 en lugar de 1.
La propiedad flex determina cómo los elementos se distribuyen en el espacio disponible a lo largo del eje principal. Se divide el espacio según la propiedad flex de cada elemento. Por ejemplo, si hay tres elementos con flex: 1, flex: 2 y flex: 3, respectivamente, se distribuirá el espacio en proporción a estos valores.

FlexDirection controla la dirección en la que se colocan los elementos secundarios dentro de un contenedor. Puede tener los valores de column, row, column-reverse y row-reverse para especificar diferentes direcciones. Otras propiedades como justifyContent, alignItems, alignSelf y alignContent se utilizan para alinear los elementos a lo largo del eje principal o del eje cruzado.

También la documentación abarca estos conceptos:

**Layout Direction:** React Native admite tanto el diseño de izquierda a derecha (LTR) como el diseño de derecha a izquierda (RTL). El diseño LTR es el valor predeterminado y se utiliza para alinear el texto y los elementos de izquierda a derecha. El diseño RTL se utiliza en idiomas como el árabe o el hebreo, donde el texto y los elementos se alinean de derecha a izquierda.

**Justify Content:** Esta propiedad se utiliza para alinear los elementos a lo largo del eje principal del contenedor. Puede tener valores como flex-start, flex-end, center, space-between y space-around. Estos valores determinan cómo se distribuye el espacio disponible entre los elementos o alrededor de ellos.

**Align Items:** Similar a justifyContent, alignItems se utiliza para alinear los elementos a lo largo del eje cruzado del contenedor. Puede tener valores como stretch, flex-start, flex-end, center y baseline. Estos valores determinan cómo se alinean verticalmente los elementos dentro del contenedor.

**Align Self:** Esta propiedad se aplica a un elemento individual dentro de un contenedor y anula cualquier valor establecido por la propiedad alignItems del contenedor. Permite alinear un elemento específico de manera diferente a los demás elementos del contenedor.

**Align Content:** Se utiliza para alinear las líneas de elementos a lo largo del eje cruzado cuando se produce el ajuste de línea (wrapping). Puede tener valores como flex-start, flex-end, stretch, center, space-between y space-around. Estos valores determinan cómo se distribuyen las líneas de elementos a lo largo del eje cruzado del contenedor.

**Flex Wrap:** Esta propiedad controla si los elementos se ajustan dentro de una sola línea o se envuelven a múltiples líneas cuando el espacio disponible es insuficiente. Si se permite el ajuste de línea, se puede utilizar la propiedad alignContent para especificar cómo se colocan las líneas dentro del contenedor.

#

## Comparación

Nivel 1

![image](https://github.com/Moises024/examen_final/assets/126703271/2ae01a77-163f-4dea-99a5-f97bf28e9ebb)

En este nivel se utiliza "justify-content: flex-end" de la documentación para alinear la rana al final del eje principal del contenedor.

#

Nivel 2

![image](https://github.com/Moises024/examen_final/assets/126703271/688b7608-3c22-4f5c-acad-5b539d3b868d)

En este nivel se utiliza "justify-content: center" de la documentación para alinear las ranas al centro del eje principal del contenedor.

#

Nivel 3

![image](https://github.com/Moises024/examen_final/assets/126703271/deb95e7b-e83e-4dcd-ac25-cbf9cd393cf8)

En este nivel se utiliza "justify-content: space-around" de la documentación para separar uniformemente las ranas a lo largo del eje principal del contenedor y así distribuir el espacio restante alrededor de las ranas.

#

Nivel 4

![image](https://github.com/Moises024/examen_final/assets/126703271/1a9cafd1-4eac-4873-bc85-f5e849f52058)

En este nivel se utiliza "justify-content: space-between" de la documentación para distribuir uniformemente a las ranas dentro del contenedor de alineación a lo largo del eje principal.

#

Nivel 5

![image](https://github.com/Moises024/examen_final/assets/126703271/205f9e29-4a4d-45d1-b145-145c4bd1e4c4)

En este nivel se utiliza "align-items: flex-end" de la documentación para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 6

![image](https://github.com/Moises024/examen_final/assets/126703271/b431aa0e-8c58-417a-b2bc-0dc67ea8b085)

En este nivel se utiliza "justify-content: center" de la documentación para para alinear la rana al centro del eje principal del contenedor. También se utiliza "align-items: center" para alinear la rana al centro del eje transversal del contenedor.

#

Nivel 7

![image](https://github.com/Moises024/examen_final/assets/126703271/bc407f49-0d92-4b32-9281-3792384bba8a)

En este nivel se utiliza "justify-content: space-around" de la documentación para separar uniformemente las ranas a lo largo del eje principal del contenedor y así distribuir el espacio restante alrededor de las ranas. También se utiliza "align-items: flex-end" para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 8

![image](https://github.com/Moises024/examen_final/assets/126703271/34c7e7d1-c9a2-4398-a6da-48581d7399fa)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda.

#

Nivel 9

![image](https://github.com/Moises024/examen_final/assets/126703271/b1825a0b-e57a-4e2d-a45a-0dc5b0e0ab60)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo.

#

Nivel 10

![image](https://github.com/Moises024/examen_final/assets/126703271/39e87cc3-98cb-4df1-b960-597e0cba4144)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda. También se utiliza "justify-content: flex-end" para alinear las ranas al final del eje principal del contenedor. Aparece en el principio por el reverse.

#

Nivel 11

![image](https://github.com/Moises024/examen_final/assets/126703271/eb41a3c6-875e-40b1-98f4-4b2e47382cf2)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo. También se utiliza "justify-content: flex-end" para alinear las ranas al final del eje principal del contenedor.

#

Nivel 12

![image](https://github.com/Moises024/examen_final/assets/126703271/dffd5bed-9622-476f-a971-d9abe39ffb56)

En este nivel se utiliza "flex-direction: column-reverse" de la documentación para alinear las ranas de abajo hacia arriba. También se utiliza "justify-content: space-between" para distribuir uniformemente a las ranas dentro del contenedor de alineación a lo largo del eje principal.

#

Nivel 13

![image](https://github.com/Moises024/examen_final/assets/126703271/ecbb3cda-0a4a-454d-a4a2-068866e244d9)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda. También se utiliza "justify-content: center" para alinear las ranas al centro del eje principal del contenedor. Por último, se utiliza "align-items: flex-end" para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 14

![image](https://github.com/Moises024/examen_final/assets/126703271/fb27dad2-b8a5-457c-9a05-c41b19e5feb1)

En este nivel se utiliza "order: 3" para mover la rana amarilla de posición.

#

Nivel 15

![image](https://github.com/Moises024/examen_final/assets/126703271/871ef2df-23e9-4b51-9a95-26c96530c4e8)

En este nivel se utiliza "order: -1" para mover la rana roja a la posición -1.

#

Nivel 16

![image](https://github.com/Moises024/examen_final/assets/126703271/daed1717-2b63-42a0-aaa2-e94b52271070)

En este nivel se utiliza "align-self: flex-end" de la documentación para alinear solo la rana amarilla al final del eje transversal del contenedor.

#

Nivel 17

![image](https://github.com/Moises024/examen_final/assets/126703271/619d8d94-b1c3-43db-b936-9175144049cf)

En este nivel se utiliza "order: 1" para mover law ranas amarillas a la posición 1. También se utiliza "align-self: flex-end" para alinear solo las ranas amarillas al final del eje transversal del contenedor.

#

Nivel 18

![image](https://github.com/Moises024/examen_final/assets/126703271/549816de-33f4-423f-a9d5-28dc991a2c50)

En este nivel se utiliza "flex-wrap: wrap" de la documentación para poner las ranas más grandes y así poner la rana verde y la roja en la siguiente línea.

#

Nivel 19

![image](https://github.com/Moises024/examen_final/assets/126703271/4cdf701b-0aaa-4507-9849-abfe4de3c5eb)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo. También se utiliza "flex-wrap: wrap" para que las ranas sean más grandes y así ponerlas en la siguiente línea.

#

Nivel 20

![image](https://github.com/Moises024/examen_final/assets/126703271/931be8aa-29dd-4927-955e-8e6e1d504bf9)

En este nivel se utiliza "flex-flow: column wrap" para alinear las ranas de arriba a abajo y para que las ranas sean más grandes y así ponerlas en la siguiente línea.

#

Nivel 21

![image](https://github.com/Moises024/examen_final/assets/126703271/7518fef4-051d-4446-8d42-5f6db5348488)


En este nivel se utiliza "align-content: flex-start" de la documentación para  alinear las ranas al inicio del eje transversal del contenedor.

#

Nivel 22

![image](https://github.com/Moises024/examen_final/assets/126703271/123e88be-5522-4f55-a8dc-7e9092b7b3ff)

En este nivel se utiliza "align-content: flex-end" de la documentación para  alinear las ranas al final del eje transversal del contenedor.

#

Nivel 23

![image](https://github.com/Moises024/examen_final/assets/126703271/068f4558-7b1e-486d-9f4d-653bd6219ffc)

En este nivel se utiliza "flex-direction: column-reverse" de la documentación para alinear las ranas de abajo hacia arriba. También se utiliza "align-content: center" para  alinear las ranas al centro del eje transversal del contenedor.

#

Nivel 24

![image](https://github.com/Moises024/final_project/assets/126703271/79bc5439-a07f-4fa0-9e5e-d5b53459975c)

En este nivel se utiliza "flex-flow: column-reverse wrap-reverse" para alinear las ranas de abajo hacia arriba. También se utiliza "justify-content: center" de la documentación para alinear las ranas amarillas al centro del eje principal del contenedor. Por último, se utiliza "align-content: space-between" para espaciar uniformemente las ranas a lo largo del eje transversal del contenedor.
