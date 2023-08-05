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

![image](https://github.com/Moises024/final_project/assets/126703271/a8fcd77f-ce23-4710-9158-ad81721ffe6d)

En este nivel se utiliza "justify-content: flex-end" de la documentación para alinear la rana al final del eje principal del contenedor.

#

Nivel 2

![image](https://github.com/Moises024/final_project/assets/126703271/1fa354e7-531f-4f4d-9898-ca825387dccc)

En este nivel se utiliza "justify-content: center" de la documentación para alinear las ranas al centro del eje principal del contenedor.

#

Nivel 3

![image](https://github.com/Moises024/final_project/assets/126703271/afdb30a0-f4bd-442a-a9c8-230e617b3526)

En este nivel se utiliza "justify-content: space-around" de la documentación para separar uniformemente las ranas a lo largo del eje principal del contenedor y así distribuir el espacio restante alrededor de las ranas.

#

Nivel 4

![image](https://github.com/Moises024/final_project/assets/126703271/277f255c-bc11-4d5a-91e3-bce3fcddf7b8)

En este nivel se utiliza "justify-content: space-between" de la documentación para distribuir uniformemente a las ranas dentro del contenedor de alineación a lo largo del eje principal.

#

Nivel 5

![image](https://github.com/Moises024/final_project/assets/126703271/373faeb6-027f-4aa2-93eb-e0f597e8b992)

En este nivel se utiliza "align-items: flex-end" de la documentación para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 6

![image](https://github.com/Moises024/final_project/assets/126703271/1c87fb10-6d67-429c-b641-38557c20ea57)

En este nivel se utiliza "justify-content: center" de la documentación para para alinear la rana al centro del eje principal del contenedor. También se utiliza "align-items: center" para alinear la rana al centro del eje transversal del contenedor.

#

Nivel 7

![image](https://github.com/Moises024/final_project/assets/126703271/55e63c8a-7fee-41cc-8855-917aaa0d1f3f)

En este nivel se utiliza "justify-content: space-around" de la documentación para separar uniformemente las ranas a lo largo del eje principal del contenedor y así distribuir el espacio restante alrededor de las ranas. También se utiliza "align-items: flex-end" para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 8

![image](https://github.com/Moises024/final_project/assets/126703271/1ab5d6f5-31d4-42cb-bf80-730260289c5f)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda.

#

Nivel 9

![image](https://github.com/Moises024/final_project/assets/126703271/f8711bc5-11bd-4b70-924f-7645389e823c)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo.

#

Nivel 10

![image](https://github.com/Moises024/final_project/assets/126703271/7fbce145-b86a-4225-b5f9-4256bab4d309)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda. También se utiliza "justify-content: flex-end" para alinear las ranas al final del eje principal del contenedor. Aparece en el principio por el reverse.

#

Nivel 11

![image](https://github.com/Moises024/final_project/assets/126703271/173e165e-4bf8-4dc1-8811-3fb148e40568)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo. También se utiliza "justify-content: flex-end" para alinear las ranas al final del eje principal del contenedor.

#

Nivel 12

![image](https://github.com/Moises024/final_project/assets/126703271/f63a247b-d6ec-4cfa-a7d8-4e24f1792b94)

En este nivel se utiliza "flex-direction: column-reverse" de la documentación para alinear las ranas de abajo hacia arriba. También se utiliza "justify-content: space-between" para distribuir uniformemente a las ranas dentro del contenedor de alineación a lo largo del eje principal.

#

Nivel 13

![image](https://github.com/Moises024/final_project/assets/126703271/0e346753-5344-4cf4-8808-721c545ee89e)

En este nivel se utiliza "flex-direction: row-reverse" de la documentación para alinear las ranas de derecha a izquierda. También se utiliza "justify-content: center" para alinear las ranas al centro del eje principal del contenedor. Por último, se utiliza "align-items: flex-end" para alinear las ranas al final del eje transversal del contenedor.

#

Nivel 14

![image](https://github.com/Moises024/final_project/assets/126703271/8047aa97-2858-4eb3-8564-745eda072787)


En este nivel se utiliza "order: 3" para mover la rana amarilla de posición.

#

Nivel 15

![image](https://github.com/Moises024/final_project/assets/126703271/c7281cf7-e2e6-4c07-acf6-eeb22e0368b8)

En este nivel se utiliza "order: -1" para mover la rana roja a la posición -1.

#

Nivel 16

![image](https://github.com/Moises024/final_project/assets/126703271/2e0dce50-63ea-43de-a81e-8d3b052e5d6d)

En este nivel se utiliza "align-self: flex-end" de la documentación para alinear solo la rana amarilla al final del eje transversal del contenedor.

#

Nivel 17

![image](https://github.com/Moises024/final_project/assets/126703271/2741688a-d943-4362-996f-e010bf9028e3)

En este nivel se utiliza "order: 1" para mover law ranas amarillas a la posición 1. También se utiliza "align-self: flex-end" para alinear solo las ranas amarillas al final del eje transversal del contenedor.

#

Nivel 18

![image](https://github.com/Moises024/final_project/assets/126703271/5f988e4c-651a-4f3b-878c-937c0d5221e9)

En este nivel se utiliza "flex-wrap: wrap" de la documentación para poner las ranas más grandes y así poner la rana verde y la roja en la siguiente línea.

#

Nivel 19

![image](https://github.com/Moises024/final_project/assets/126703271/7ad1aaf5-ba9c-4d19-83cd-7299852a99a1)

En este nivel se utiliza "flex-direction: column" de la documentación para alinear las ranas de arriba a abajo. También se utiliza "flex-wrap: wrap" para que las ranas sean más grandes y así ponerlas en la siguiente línea.

#

Nivel 20

![image](https://github.com/Moises024/final_project/assets/126703271/c17ac85f-5394-4a24-baf1-0c184c928b92)

En este nivel se utiliza "flex-flow: column wrap" para alinear las ranas de arriba a abajo y para que las ranas sean más grandes y así ponerlas en la siguiente línea.

#

Nivel 21

![image](https://github.com/Moises024/final_project/assets/126703271/a265ca74-aa2e-4442-aafe-6f7aa5fcb457)

En este nivel se utiliza "align-content: flex-start" de la documentación para  alinear las ranas al inicio del eje transversal del contenedor.

#

Nivel 22

![image](https://github.com/Moises024/final_project/assets/126703271/b9cf364f-356f-4baf-9441-09a43b974ea3)

En este nivel se utiliza "align-content: flex-end" de la documentación para  alinear las ranas al final del eje transversal del contenedor.

#

Nivel 23

![image](https://github.com/Moises024/final_project/assets/126703271/f894d93a-51ba-456d-99ce-272a7b711dbe)

En este nivel se utiliza "flex-direction: column-reverse" de la documentación para alinear las ranas de abajo hacia arriba. También se utiliza "align-content: center" para  alinear las ranas al centro del eje transversal del contenedor.

#

Nivel 24

![image](https://github.com/Moises024/final_project/assets/126703271/79bc5439-a07f-4fa0-9e5e-d5b53459975c)

En este nivel se utiliza "flex-flow: column-reverse wrap-reverse" para alinear las ranas de abajo hacia arriba. También se utiliza "justify-content: center" de la documentación para alinear las ranas amarillas al centro del eje principal del contenedor. Por último, se utiliza "align-content: space-between" para espaciar uniformemente las ranas a lo largo del eje transversal del contenedor.
