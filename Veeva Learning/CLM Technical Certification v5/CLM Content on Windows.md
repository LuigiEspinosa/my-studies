Reps can use the Veeva CRM for Windows application to perform actions in CRM from their Windows device.

The Windows Device works and connects to the Veeva Ecosystem like the iPad but as it is a different operating environment there are a number of aspects to be aware of.

## Content Considerations

### Content Compatibility iPad and Win10

Existing CLM content reusability varies based on the content type but the two main factors that affect the content rendering are:

**Aspect Ratio**

- In general, the iPads have an aspect ratio of 4:3.
- The Windows aspect ratio is 16:9.

**Rendering engine**

- CLM content is rendered with the Windows WebView class, which uses the Microsoft Edge rendering engine.
- The iPad App uses the WKWebview.

#### HTML

Re-work is required if agencies use a fixed width 4:3 aspect ratio or any webkit (Mobile Safari) specific HTML code.

Legacy CLM API functions will not work on Windows 10.

The most current version of the CLM JavaScript library, which Veeva provides, works with both CRM and Windows 10 CLM content.

[developer.veevacrm.com/api/CLMLibrary/](https://developer.veevacrm.com/api/CLMLibrary/)

#### Videos and Images

All current CLM Video and Image types are supported on Windows 10.

Typically, they are created using a 4:3 aspect ratio on CRM.

Windows 10 devices typically use a 16:9 aspect ratio. Videos and Images in 4:3 aspect ratio will display with black bars on the right and left side.

#### PDF

For Windows, Reps can zoom in and out of PDFs using the + and - buttons or by pinching the screen for locally referenced PDFs.

The minimum size is 50% and the maximum is 400%. Pinch the screen and zoom out below 50% to exit PDFs.

Reps can also select the full screen button to zoom to Page Width, Actual Size, or Page Fit. The zoom controls do not display if zoom is disabled for the key message.

No changes required to PDFs to enable them to function on Windows tablets.

### Displaying CLM Content on Windows

CLM content is rendered with the Windows WebView class, which uses the Microsoft Edge rendering engine.

Media displays according to the following guidelines:

The resolution of the supported devices are

- **Surface display**: 10.6 inch, 1920x1080 (16:9).
- **Helix display**: 11.6 inch, 1920x1080 (16:9).

### User Interface

The top left corner (60x176) is reserved, much like on Veeva CRM for iPad.

The additional portion in the top left corner that is reserved in iOS is also reserved (160x37) in Windows 10.

### File Naming Conventions

The following should be considered when naming files for Windows.

- Try to avoid the use of symbols in file names of the Key Messages that are not permitted on a Windows device.
- Keep file names short, even though the Windows file name character limit is 260 characters, the directory name must be less than 248 characters.
- Be conscious of the folder hierarchy within you ZIP file to allow enough characters to be used for the file path.

### iPad Features that are not supported on Windows

The following are the features that are supported on the iPad but not supported in Windows:

- Augmented Reality.
- HTML Large Screen Devices.
- Concealing Out of Focus Content.
- Defining Swipe Sensitivity for Slide Navigation.
- Using FaceTime with CLM.

## Windows CRM Device Support

Veeva CRM on Windows is supported on the Windows 10 Enterprise and Professional editions.

Many customers have made significant content investments on CLM for Veeva CRM. It's important to understand and set expectations on how existing content may or may not be portable across platforms.

### Device Requirements

- **Device** must be **appropriate** for business/enterprise use.
- **Hard disk space** minimum 128GB.
- Operates **Windows 10 Pro or Enterprise** editions (Build 16299 or later).
- User must have **Microsoft .NET Framework 4.5** installed on the device. `VeevaWinInstaller` will check for the presence of .NET 4.5 and download it, if it is not present.
- **Processor** - 3rd generation Intel Code i3 dual-core. i5 or i7 are strongly recommended. At a minimum, Atom based processor is required.
- **Graphics** - This is driven by the central processor since it is built on the same package as the core processor. At minimum, an Intel HD Graphics 4000 is required.

## Quiz

> [!faq]- Do legacy CLM API functions work on Windows?
> 
> No.

> [!faq]- Are all current CLM Image Types supported in Windows 10?
> 
> Yes.

> [!faq]- How is CLM Content rendered on Windows?
> 
> Using the Webview Class.

> [!faq]- What is the supported resolution in Windows?
> 
> 1920x1080.

> [!faq]- What is the Aspect Ratio of Windows?
> 
> 16:9.

