# Major

- [ ] Implement Pricing builder
  - [ ] add parts and assign prices to them
  - [ ] create UI/Wizard to add parts
  - [ ] CSV import?

  See below for theory

- [ ] Load STEP/GLB files into viewer

- [ ] Add UI creator to expose parameter inputs to customers/users

- [ ]

## Pricing theory

The three "primitives" are:

- Components
- Raw goods cost
- Time

The flow should be to:

1. Create a "product" e.g. built-in bookcase 01
2. Create all of the components of the product in the pricing wizard
3. With each component you can add relevant metadata
   - material type
   - material price
   - operations involved with making it
   - etc.
   - Do these generate custom nodes?

4. Once you have each of the components, you combine them all in the editor and
   create the logic of the model
   - price updates dynamically based on the data of each component
   - model will update in real time in the 3D viewer.
