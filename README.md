# diy-security-camera
3D-printed security camera for R&amp;D experiments and DIY security projects.

Welcome to the DIY Security Camera project. This repository contains documentation, design materials, firmware and software for a custom-made WiFi camera device with built-in motion sensor, for your R&D projects involving cameras and/or sensors, and to use in your next field-security project!

The physical device is inspired in the work done by [@glytchtech](https://github.com/glytchtech) for his [ESPCam](https://github.com/glytchtech/ESPCam) project, with the additions of a PIR sensor for motion detection, and a new case design for the camera. Firmware and other code-pieces are custom-made.

TODO Picture

## The device

This device features a battery-powered device with built-in camera, PIR sensor - i.e. motion detection - that connects over WiFi to your network and gives you the ability to watch a close-by area remotely and securely. Thanks to the PIR sensor, this camera can be configured to sleep and only wake up when motion is detected, hence prolonging the battery life. 

### Bill of Materials

In order to build this camera, you would need:

* 3D design of the enclosure, available in Thingiverse TODO Link.
* 2x R8mm x 1mm neodymium magnets.
* 1x 18650 Battery.
* 1x ESP32-cam module.
* 1x u.FL to SMA pig tail.
* 1x SMA antenna.
* 1x PIR module.
* 1x TP4056 battery module.
* 2x M3 nuts
* 2x M3x6mm screws.
* 2x 1.5mm screws - used for watches or glasses.

TODO 3D design picture

### Manufacturing

This device's design is split in two pieces - namely _Cover_ and _Back Cover_. 

Printer setup:

* Model: Prusa Research MK3 MMU2s
* Infill: >15%.
* Supports: No.
* Material: ABS.

#### Back cover

TODO Picture

The back cover hosts the magnets for field attachment, the core electronics - i.e. battery, antenna pig tail and battery module -  and the cabling. Printing the back cover takes about 1h.

Once you have the back cover printed, fix the 2 M3 nuts in the side holes, so the screws can fix the design later. The two magnets should fit in the two holes of the back-side of the part.

Place the SMA connector of the pig tail in the side hole, and attach using the included nuts and components. The SMA connector should be placed outside of the part for connecting an antenna later.

The battery module has also a configured space in the side of the part, where it should fit and leave the micro-USB connection facing outwards. The battery is just placed in the middle of the _Back Cover_ part.

#### Cover

TODO Picture

The cover part hosts the ESP and the PIR. The cover slides in the back cover, creating a closed box. The two screws on the sides keep the box closed.

The PIR module has two holes for screwing the module into the enclosure, and the _Cover_ part has two holes for screwing the module in. Use two small screws - I used 2x 1.5mm x 4mm screws used in glasses or watches, but others may work - to keep the PIR in place. The dome of the PIR should be placed outside of the part.

Attach the camera module to the ESP and fix it on top of the SD-card - usually these camera modules come with 2-sided sticky tape pasted on their back. The module should then just snap in place of the _Cover_ part, with the camera facing outwards from the case.

TODO Assembled picture

_NOTE: Once assembled, the parts that are not directly attached should hold in-place without any movement. However, if you observe any wiggling from a component once assembled, feel free to fix it further using your glue of choice - if gluing the magnets to the part, try not to separate them further from the outside part of the case, or the camera may not have proper magnetic attachments later._

_**Warning:** Once the device is fully assembled, the screws that close the box may be in contact with the battery pads - this is by-design, to use the screws as external battery pads. To avoid this, either use plastic screws and nuts or use some tape to cover the screws._

#### Cabling

Cabling should be straightforward, but some soldering is required, as jumpers may not fit in the closed box.

TODO Picture

The PIR data pin is configured in the firmware as `GPIO12`. If you solder the connection to a different port, then you should adapt the firmware too.

### Firmware

The firmware of the device is based on Mongoose OS, and it has the following features: 

* [ ] It connects to your configured WiFi network.
* [ ] It allows you to visualize the video feed locally in the same network.
* [ ] It connects to the AWS Cloud and transmits telemetry messages and image data.
* [ ] It allows you to operate the device remotely.
* [ ] It allows you to ship updates to the devices remotely.

