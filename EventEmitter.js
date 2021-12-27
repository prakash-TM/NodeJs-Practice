const Events = require("events")
    // line 1 or -> import { EventEmitter } from "events"
    //
const eventInstance = new Events.EventEmitter()
    //
eventInstance.on("first emitter", (data) => {
    console.log({ data })
})


const msg = () => {
    console.log("inside msg function : hello")
}

eventInstance.emit("first emitter", "hello")
eventInstance.emit("first emitter", { wish: "hello" })
eventInstance.emit("first emitter", 21)
eventInstance.emit("first emitter", ["hi", "hello"])
eventInstance.emit("first emitter", msg())

eventInstance.emit("second emitter", "hello") // it doesn't print. because the string name is different second instance of first