def on_in_background():
    serial.write_line("" + control.device_name() + "," + convert_to_text(input.acceleration(Dimension.X)) + ",")
    basic.pause(40)
control.in_background(on_in_background)
