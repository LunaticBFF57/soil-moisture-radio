radio.setGroup(69)
basic.showString("Moisture Radio")
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    serial.writeValue("Soil Moisture", receivedNumber)
})
