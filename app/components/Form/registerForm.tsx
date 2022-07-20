import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ActivityIndicator, TextStyle, View, ViewStyle } from "react-native"
import { ms, mvs } from "react-native-size-matters"
import { EyeOffSvg, EyeSvg } from "../../../assets/svgs"
import { Button, Text } from "../../components"
import { useStores } from "../../models"
import { navigate } from "../../navigators"
import { color } from "../../theme"
import { TextField } from "../text-field/text-field"

const LABEl: TextStyle = {
  height: 26,
  color: color.palette.purple,
}

const INPUTWRAPPER: ViewStyle = {
  marginBottom: 15,
}

const TEXTERROR: TextStyle = {
  color: color.error,
}

const BORDERWRAPPERINPUT: ViewStyle = {
  paddingLeft: 14,
  paddingRight: 14,
  paddingTop: 0,
  paddingBottom: 0,
  height: 46,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderColor: "#e8e8e8",
  borderWidth: 1,
  borderRadius: 10,
}

const INPUT: TextStyle = {
  color: "#000000",
  margin: 0,
  borderColor: "#fff",
  height: "100%",
  padding: 0,
  fontSize: 14,
  fontFamily: "Manrope",
  lineHeight: 19,
  fontWeight: "600",
}

const BUTTONSUBMIT: ViewStyle = {
  height: 45,
  borderRadius: 10,
  backgroundColor: color.palette.purple,
}
const DISABLESTYLEBUTON: ViewStyle = {
  ...BUTTONSUBMIT,
  opacity: 0.8,
}

const TEXTSUBMIT: TextStyle = {
  fontSize: 17,
  lineHeight: 23.22,
  fontWeight: "600",
  fontFamily: "Manrope",
}

interface FORMDATA {
  username: string
  email: string
  password: string
}

interface FormProps {
  gotoHome: VoidFunction
  // if this passed all the way through you might do this or make a union type
  isLoginScreen?: boolean
}

function RegisterForm(props: FormProps) {
  const initialValues = props.isLoginScreen ? {
    email: "",
    password: "",
  } : {
    username: "",
    email: "",
    password: "",
  }
  const { control, handleSubmit, errors } = useForm<FORMDATA>({
    defaultValues: initialValues
  })
  const [isShow, setIsShow] = useState<boolean>(false)
  const toggle = () => {
    setIsShow(!isShow)
  }
  const { authStore } = useStores()
  const { status, messages, signup, login } = authStore


  const gotoLogin = () => {
    props.isLoginScreen ?
      navigate("register") :
      navigate("login")
  }

  const onSubmit: SubmitHandler<FORMDATA> = (data) => {
    props.isLoginScreen ?
      login(data.email, data.password, "huhu") :
      signup(data.username, data.email, data.password, "huhu")
  }
  return (
    <View>
      {
        !props.isLoginScreen &&
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={INPUTWRAPPER}>
              <Text tx={"RegisterScreen.labelsTextFields.username"} style={LABEl} />
              <TextField
                value={value}
                onBlur={onBlur}
                onChangeText={(newValue) => onChange(newValue)}
                style={BORDERWRAPPERINPUT}
                inputStyle={INPUT}
                placeholder="Enter username "
              ></TextField>
            </View>
          )}
          name="username"
          rules={{ required: true }}
          defaultValue=""
        />
      }
      {errors?.username && <Text style={TEXTERROR}>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <View style={INPUTWRAPPER}>
            <Text tx={"RegisterScreen.labelsTextFields.email"} style={LABEl} />
            <TextField
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={BORDERWRAPPERINPUT}
              inputStyle={INPUT}
              placeholder="Enter email "
            ></TextField>
          </View>
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text style={TEXTERROR} text={errors.email.message}></Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <View style={INPUTWRAPPER}>
            <Text tx={"RegisterScreen.labelsTextFields.password"} style={LABEl} />
            <TextField
              secureTextEntry={isShow}
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={BORDERWRAPPERINPUT}
              inputStyle={INPUT}
              placeholder="Enter password "
            >
              {
                isShow ?
                  <EyeSvg onPress={toggle} width={ms(24)} height={ms(24)} style={{ position: "absolute", right: mvs(6), }} color={color.palette.black} /> :
                  <EyeOffSvg onPress={toggle} width={ms(24)} height={ms(24)} style={{ position: "absolute", right: mvs(6), }} color={color.palette.black} />
              }
            </TextField>
          </View>
        )}
        rules={{ required: true }}
        name="password"
        defaultValue=""

      />
      {errors.password && <Text style={TEXTERROR}>This is required.</Text>}
      <Button
        textStyle={TEXTSUBMIT}
        style={BUTTONSUBMIT}
        disabled={status === "pending"}
        onPress={handleSubmit(onSubmit)}
      >
        {
          status === "pending" ? <ActivityIndicator /> : <Text text="Submit" />
        }
      </Button>
      <Text style={TEXTERROR} text={messages}></Text>
      <Text text={props.isLoginScreen ? "Dont have a account?" : "Have a account"} style={[TEXTSUBMIT, { color: color.palette.purple }]} onPress={() => gotoLogin()}> </Text>
    </View>
  )
}


export default observer(RegisterForm)
