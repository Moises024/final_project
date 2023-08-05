# examen_final

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
