const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
  await TestHelper.setup({ authEnabled: false, sysStatesEnabled: false });
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
});

afterAll(async () => {
  await TestHelper.teardown();
});

describe("Testing the students", () => {
  test("Create student", async () => {
    let dtoIn = {
      firstname: "Jan",
		  surname: "Jaroš",
		  adress: {
			town: "Praha"
		  }
    };
    let result = await TestHelper.executePostCommand("student/create", dtoIn);

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
  test("Get students", async () => {
    let result = await TestHelper.executeGetCommand("student/list");

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();

    let student = result.data.list.itemList[0];
    expect(student.firstname).toEqual("Jan");
    expect(student.surname).toEqual("Jaroš");
    expect(student.adress.town).toEqual("Praha");
  });
  test("Update student", async () => {
    let firstStudentResult = await TestHelper.executeGetCommand("student/list");
  

    let dtoIn = {
      id: firstStudentResult.data.list.itemList[0].id,
      firstname: "Matěj",
		  surname: "Jaroš",
		  adress: {
			town: "Brno"
		  }
    };
    let result = await TestHelper.executePostCommand("student/update", dtoIn);

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
  test("Get by id updated student", async () => {
    let resultList = await TestHelper.executeGetCommand("student/list");

    let dtoIn = {
      id: resultList.data.list.itemList[0].id
    };
    let result = await TestHelper.executeGetCommand("student/get", dtoIn);

    expect(result.status).toEqual(200);

    let student = result.data.item;
    expect(student.firstname).toEqual("Matěj");
    expect(student.surname).toEqual("Jaroš");
    expect(student.adress.town).toEqual("Brno");
  });

  test("Delete student", async () => {
    let firstStudentResult = await TestHelper.executeGetCommand("student/list");

    let dtoIn = {
      id: firstStudentResult.data.list.itemList[0].id
    };
    let result = await TestHelper.executePostCommand("student/delete", dtoIn);

    expect(result.status).toEqual(200);
  });

  test("Empty student list", async () => {
    let result = await TestHelper.executeGetCommand("student/list");

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();

    let studentListLength = result.data.list.itemList.length;
    expect(studentListLength).toEqual(0);
  });
});
