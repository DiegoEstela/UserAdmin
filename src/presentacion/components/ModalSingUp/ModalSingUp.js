import { useState } from "react";
import {CreateUser} from "../../../api/services/CreateUser";
import {
  Column,
  Input,
  Button,
  Spacer,
  InputSelect,
  Title,
} from "@umahealth/occipital-ui";

function ModalSingUp() {
  const [rol, setRol] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rol: "",
    vistas: "array",
  });
  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    try {
      CreateUser(formData.email, formData.password, rol, formData.vistas);
    } catch (e) {
      alert("Ocurrió un error");
      console.error("Error de firebase:", e);
    }
  };

  return (
    <>
      <Title hierarchy="2" text="Crear Usuario" />
      <section className="login">
        <Column alignment="center">
          <Input
            type="text"
            name="email"
            label="E-mail"
            action={handleChangeFormData}
          />
          <Spacer value="10px" direction="vertical" />
          <Input
            type="password"
            name="password"
            label="Password"
            action={handleChangeFormData}
          />
          <Spacer value="10px" direction="vertical" />
          <Button action={handleSubmitSignUp} size="full">
            Crear
          </Button>
          <Spacer value="10px" direction="vertical" />
          <InputSelect
            color="secondary"
            data={[
              {
                label: "Escritura",
                value: "write",
              },
              {
                label: "Lectura",
                value: "read",
              },
            ]}
            label="Eliga el rol del usuario"
            onSelect={(e) => setRol(e)}
            size="medium"
          />
        </Column>
      </section>
    </>
  );
}

export default ModalSingUp;
