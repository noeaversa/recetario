create database recetario;
use recetario;

create table receta(nombre varchar(250), 
					descripcion varchar(100), 
					cantidad int, 
                    medida enum('GRAMO', 'LITRO', 'UNIDAD'),
                    primary key (nombre));
                    
create table receta_x_receta(id int,
							nombreReceta1 varchar(250),
							nombreReceta2 varchar(250),
							foreign key(nombreReceta1) references receta(nombre),
							foreign key(nombreReceta2) references receta(nombre));
                             
create table pasos(idPaso int,
				descripcion varchar(250),
                nombreReceta varchar(250),
                orden int,
                foreign key(nombreReceta) references receta(nombre));

create table usuario(nombre_usuario varchar(80),
					contraseña varchar(20),
					primary key(nombre_usuario));

-- drop database recetario;