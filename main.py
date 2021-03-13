radio.set_group(69)
basic.show_string("Moisture Radio")

def on_received_number(receivedNumber):
    serial.write_value("Soil Moisture", receivedNumber)
radio.on_received_number(on_received_number)