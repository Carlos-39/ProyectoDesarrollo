----------------Base de datos para el concesionario de Carros--------------------------------

-- Tabla Sucursal
CREATE TABLE Sucursal (
    ID_Sucursal INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Direccion VARCHAR(100),
    Telefono VARCHAR(15)
);

-- Tabla Usuario
CREATE TABLE Usuario (
    ID_Usuario INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Rol VARCHAR(20),
	-----foreign key-----------
    ID_Sucursal INT,
    FOREIGN KEY (ID_Sucursal) REFERENCES Sucursal(ID_Sucursal)
);

-- Tabla Cliente
CREATE TABLE Cliente (
    ID_Cliente INT PRIMARY KEY,
	DocIdentificacion INT NOT NULL,
    Nombre VARCHAR(50),
	Apellido VARCHAR(50),
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    Direccion VARCHAR(100)
);

-- Tabla Vehiculo
DROP TABLE IF EXISTS Vehiculo cascade; 
CREATE TABLE Vehiculo (
    ID_Vehiculo SERIAL PRIMARY KEY,
    Marca VARCHAR(50),
    Modelo VARCHAR(50),
    Anio INT,
	Disponibilidad INT,
	Precio INT NOT NULL,
	Color VARCHAR(50),
	Descripcion VARCHAR(100)
);

-- Tabla Cotizacion
CREATE TABLE Cotizacion (
    ID_Cotizacion INT PRIMARY KEY,
    Fecha DATE,
    Precio INT NOT NULL,
	Celular INT,
	Telefono INT,
	Direccion VARCHAR(255) NOT NULL,
	---------foreign key-----------
    ID_Usuario INT,
    ID_Cliente INT,
	ID_Vehiculo INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario),
    FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente),
	FOREIGN KEY (ID_Vehiculo) REFERENCES Vehiculo(ID_Vehiculo)
);

-- Tabla Repuesto
CREATE TABLE Repuesto (
    ID_Repuesto INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Precio INT NOT NULL,
    Stock INT,
	Descripcion VARCHAR(100)
);


-- Tabla OrdenReparacion
CREATE TABLE OrdenReparacion (
    ID_OrdenReparacion INT PRIMARY KEY,
    FechaInicio DATE,
    FechaFin DATE,
    Descripcion TEXT,
    CostoTotal INT NOT NULL,
	comentarios TEXT,
	Telefono INT,
	Fijo INT,
	-----foreign key-----------
	ID_Cliente INT,
    ID_Vehiculo INT,
	ID_Repuesto INT,
	ID_Usuario INT,
	FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente),
    FOREIGN KEY (ID_Vehiculo) REFERENCES Vehiculo(ID_Vehiculo),
	FOREIGN KEY (ID_Repuesto) REFERENCES Repuesto(ID_Repuesto),
	FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario)
);

-----Tabla muchos a muchos entre vehiculo y repuesto--------------------------------
CREATE TABLE Posee (
    ID_Vehiculo INT,
    ID_Repuesto INT,
    FOREIGN KEY (ID_Vehiculo) REFERENCES Vehiculo(ID_Vehiculo),
    FOREIGN KEY (ID_Repuesto) REFERENCES Repuesto(ID_Repuesto),
    PRIMARY KEY (ID_Vehiculo, ID_Repuesto) -- Definición de clave primaria compuesta
);

-------------------DATOS---------------

------Sucursal date-------------
INSERT INTO Sucursal (ID_Sucursal, Nombre, Direccion, Telefono) VALUES
(1, 'Sucursal_Cali', 'calle_8a_#34-67', '3158746695'),
(2, 'Sucursal_Medellin', 'carrera_78b_#49-55', '3218754620'),
(3, 'Sucursal_Bogota', 'calle_56_#11-20a', '3121475628');

INSERT INTO Usuario (ID_Usuario, Nombre, Rol, ID_Sucursal) VALUES
(1, 'Carlos', 'Gerente', 1),
(2, 'Laura', 'Vendedor', 2),
(3, 'Pedro', 'Cliente', 1);

INSERT INTO Repuesto (ID_Repuesto, Nombre, Precio, Stock, Descripcion) VALUES
(1, 'Filtro_de_aceite', 50000, 50, 'Filtro_de_aceite_para_carros'),
(2, 'Bateria_de_carro', 200000, 20, 'Bateria_de_12V');

INSERT INTO Vehiculo (Marca, Modelo, Anio, Disponibilidad, Precio, Color, Descripcion) VALUES
('DCR2000', 'Hatchback_2024', 2024, 1, 25000000, 'Blanco', 'Automovil_compacto'),
('WH15000', 'Sedan_2023', 2023, 1, 60000000, 'Gris', 'SUV');


INSERT INTO Cliente (ID_Cliente, DocIdentificacion, Nombre, Apellido, Telefono, Email, Direccion) VALUES
(1, 123456789, 'Maria', 'Gomez', '3104005000', 'maria@gmail.com', 'Calle_12_#34'),
(2, 987654321, 'Jorge', 'Perez', '3206007000', 'jorge@hotmail.com', 'Carrera_3_#56');

INSERT INTO Cotizacion (ID_Cotizacion, Fecha, Precio, Celular, Telefono, Direccion, ID_Usuario, ID_Cliente, ID_Vehiculo) VALUES
(1, '2023-11-10', 1000, 321654987, 315874, 'calle_8a_#34-67', 1, 1, 1),
(2, '2023-11-11', 1500, 311201234, 321875, 'carrera_78b_#49-55', 2, 2, 2);

INSERT INTO OrdenReparacion (ID_OrdenReparacion, FechaInicio, FechaFin, Descripcion, CostoTotal, comentarios, Telefono, Fijo, ID_Cliente, ID_Vehiculo, ID_Repuesto, ID_Usuario) VALUES
(1, '2023-11-05', '2023-11-15', 'Reparacion_de_motor', 800000, 'Reparacion_en_curso', 3001002, 1002003, 1, 1, 1, 1),
(2, '2023-11-07', '2023-11-20', 'Cambio_de_llantas', 400000, 'Esperando_repuestos', 3102013, 1013002, 2, 2, 2, 2);

INSERT INTO Posee (ID_Vehiculo, ID_Repuesto) VALUES
(1, 1),
(2, 2);