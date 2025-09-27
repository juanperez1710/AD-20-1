const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();
  
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  /** TArea 2:  */
  describe("verificando las funciones add() y remove()",()=>{
    test("prueba para la función add() que verifica un usuario que no está en la lista de usuarios",()=>{
      let user = new User(1720,"Juan", "juan@mail.org");
      userController.add(user);    
      expect(userController.getUsers()).toContain(user);
    })
    test("prueba para la función remove() que verifica un usuario que no está en la lista de usuarios",()=>{
      let user = new User(1720,"Juan", "juan@mail.org");
      userController.add(user);    
      userController.remove(user);
      expect(userController.users).not.toContain(user);
    })
  })

  describe("Pruebas unitarias para la función findByEmail",()=>{
    test("Encontrando el nombre de un nuevo usuario por su email",()=>{
      let user=new User(1530,"Eduardo","eduardo@gmail.com");
      userController.add(user);
      const busqueda=userController.findByEmail("eduardo@gmail.com")
      expect(busqueda.name).toBe("Eduardo")
    })
    test("Encontrando el id de un nuevo usuario por su email",()=>{
      let user=new User(1820,"Maria","maria@gmail.com");
      userController.add(user);
      const busqueda=userController.findByEmail("maria@gmail.com")
      expect(busqueda.id).toBe(1820)
    })
  })
    describe("Pruebas unitarias para la función findById",()=>{
    test("Encontrando el nombre de un nuevo usuario por su id",()=>{
      let user=new User(1530,"Eduardo","eduardo@gmail.com");
      userController.add(user);
      const busqueda=userController.findById(1530)
      expect(busqueda.name).toBe("Eduardo")
    })
    test("Encontrando el nombre de un nuevo usuario por su id",()=>{
      let user=new User(1820,"Maria","maria@gmail.com");
      userController.add(user);
      const busqueda=userController.findById(1820)
      expect(busqueda.name).toBe("Maria")
    })
  })

