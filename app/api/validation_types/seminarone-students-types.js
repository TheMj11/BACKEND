const createDtoInType = shape({
    firstname: string(512).isRequired(),
    middlename: string(512),
    surname: string(512).isRequired(),

    adress: shape({
        street: string(),
        town: string().isRequired(),
        zipCode: string(/^[0-9]{3} ?[0-9]{2}$/),
    }),

});

const deleteDtoInType = shape({
    id: id().isRequired()
});

const updateDtoInType = shape({
    id: id().isRequired(),
    firstname: string(512).isRequired(),
    middlename: string(512),
    surname: string(512).isRequired(),

    adress: shape({
        street: string(),
        town: string().isRequired(),
        zipCode: string(/^[0-9]{3} ?[0-9]{2}$/),
    }),
  })

const listDtoInType = shape({
});

const getDtoInType = shape({
    id: id().isRequired(),
  });