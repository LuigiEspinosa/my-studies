
## Annotation Documents

- Vault PromoMats includes robust annotation capabilities which allow you to add and reply to annotations as part of the review and approval process. The ability to annotate documents is based on user permissions and the life-cycle state of documents. When available, annotation mode is accessed by click the + icon above the document viewer. An annotation consist of two parts:
	- The selection of the document.
	- The note, including any comments you made.
- There are a few types of annotations available in Vault PromoMats. The various annotations can be added by selecting the specific cursor mode in the selector drop-down located above the document viewer.

## Image, Text and Sticky Note Annotation

When comment annotation cursor mode is selected, the cursor will change between text and image selection automatically when it recognizes selectable text.

- Text selections - Up to 200 words is supported.
- Image selections - Selection is limited to the boundaries of a single page.
- Text annotations - Available comment types include highlight, insert, strike-through, revise text, or external link.

Once the annotation is complete, click, 'Save'.

## Line Annotation

Line annotations allow you to cross out or draw attention to content.

To create a line annotation, click and drag to create the cursor. From here, you can choose the thickness of the line and add comments as needed.

Click **'Save'** to finish or **'Cancel'** to remove the line.

## Link Annotation

- Link annotations are used to create a link between two documents in Vault PromoMats. For review and approval, this is used to create a link to supporting references for claims and other data in promotional piece.
-  To use the link annotation tool, drag your cursor to select either an image or text. A pop-up menu will then appear, providing options to choose an existing anchor, the entire document, or create a new anchor (this process is explained in the next section).

## Creating an Anchor

- Anchors are a specific selection of content within a document (e.g. promotional piece) that are used when linking to supporting documents. Anchors can be created ahead of time in a reference or supporting document or can be created as port of the process of creating a link annotation. To create anchors, you must have the necessary document permissions.
- To create an anchor on a document, select the anchor tool and the relevant content. Ensure a consistent naming convention is used that makes sense to others and follows specific customer guidance.

## Annotating Videos

Vault includes limited annotation capabilities for videos. Annotations will include the timestamp of the time the playback was paused to create an annotation.

There are three types of video annotations:
- Image Note annotations.
- Image Link annotations.
- Text Asset Links (formerly known as Claims Link).

## Using Offline Annotations

- **Offline Annotation** is a feature that allows users to review documents while offline by using a preferred PDF editor. User can export the document with annotations, replay and create new annotations and once finished, import all the changes to Vault. This feature must be *Enable by an Admin*. To make offline annotations, choose **'Export Annotations'** from the document's Actions menu,
- To import a PDF with offline annotations:
	1. From the Actions menu, choose **'Import Annotations'**.
	2. Click **'Choose'** and select the file that you previously downloaded and annotated.
	3. Click **'OK'** to upload the file.
	4. To remove an import, choose **Undo Last Import** option [^1] from the Actions menu.
- The export feature allows you to annotate offline and import those annotations for an existing document. Vault does not support uploading the exported file as a new document. Vault cannot distinguish between new and preexisting Adobe Acrobat annotations and treats all annotations as new upon upload. Do not upload PDF source files with existing Adobe Acrobat annotations. *Supported PDF Viewers*: [^2]
	- Adobe Reader: All versions currently supported by Adobe.
	- Adobe Acrobat: All versions currently supported by Adobe.

[^1]: Undo Last Import option will only appear if the last import created new annotations or replies.
[^2]: Note that you may be able to view and add annotations using other applications, but Vault cannot re-import those annotations.

## Creating Links on a Document

Links to reference documents or specific anchors within a document can be created without needing to select content.

To create the link(s):
1. Go to the **'Relationships'** section of the Document Information panel.
2. Find the **Linked Documents** panel.
3. Click the + symbol.
4. Search for the relevant document that you are linking to or where the anchors exist.
5. Click the green + symbol next to the relevant document(s) and/or anchor(s).
6. Click **'Close'**.

## Importing Document Links

To simplify the annotation process for documents leveraging existing content, Vault PromoMats enabled a feature to allow the importing of document links from another document. [^3]

To import document links:
1. Click the **'Action Menu'**.
2. Select **'Import Document Links'**.
3. Click the green + symbol next to the document you wish to import from.
4. Click **'Continue'**.

These documents and their links will now be in the Linked Documents panel where you can use the actions, we previously reviewed to create a link to content.

[^3]: Note that this feature is different from [[Working with Documents During the Review Process#Bring Forward Annotations|Bring Forward Annotations]] as this feature can be done on unrelated documents.

## Creating a Link to Content from Linked Documents

There is a feature to pull annotations from Linked Documents into new content. This can reduce the number of clicks required to create a link.

To create the link(s):
1. Go to the 'Relationships' section of the Document Information panel.
2. Find the Linked Documents panel and *Expand* it.
3. Next to the document links or anchors that exist, click the three dots icon.
4. Select **'Link to Content'**.
5. Scroll to the relevant content in your document and selects as you would when creating an annotation.
6. Click the check icon to complete the new annotation.

## Binders Overview

Binders are a tool in Vault PromoMats that allows you to organize and group documents together into a structure that makes sense for your porject.

Binders consist of sections, which can be nested to create a hierarchy and links to documents.

## Creating Binders

To create a binder, you must have the Create Binder Permission.

To create a binder:
1. Click the **'Create'** button in the library.
2. Choose **'Binder'** and click **'Continue'**.
3. Select the document type that is relevant for the binder that you're creating.
4. Click **'Next'**.
5. Complete the metadata for the binder as you would a document ensuring you're aligning to the specific customer process.
6. Click **'Save'**

## Creating Binders Sections

Sections allow you to organize documents within a binder. Sections can be nested to create hierarchy.

A number will be shown next to each section noting the number of documents in it.

When navigating within a binder, the breadcrumb trail will allow you to navigate easily between your binder hierarchy.

To create sections in a binder:
1. While in the binder, click **'Edit Binder'**.
2. Click **'Add'**.
3. Select **'Section'** and name the section.
4. Continue to add your sections, when done, click **'Done Editing'**.

## Adding Documents to a Binder

- Documents can be added directly to the binder or to a section within a binder. This creates a link to the document, it does not create a duplicate version of the document. Any updates made to the document in the library or the state of the document will be reflected in the binder.
-  To add the document(s):
	1. While in the binder, click **'Edit Binder'**.
	2. By default, the document will be added to the root of the binder unless you click into a section.
	3. Click **'Add'**, select **'Existing Documents'**.
	4. The document selector will open allowing you to search to use filters to find the documents you're looking for.
	5. Click the document selector and click **'Done Editing'** when you've added all documents.

## Uploading Directly into a Binder

In the instance you are adding a document that doesn't already exist in the library, you can do so from within the binder. You can either upload a new document or create a placeholder.

To upload directly into a binder:
1. While in the binder, click **'Edit Binder'**.
2. Click **'Add'**, select **'Placeholder'** or **'Upload'**.
3. The process for doing either of these is the same as if you were adding to the library as was covered in Vault PromoMats Basics.
4. Once the placeholder has been created or the document has been uploaded, click **'Done Editing'**. [^4]

[^4]: The document or placeholder created will be available in the library as well as the binder.

## Viewing and Filtering Binder Content

There are a number of tools available to help you when navigating through binder content.

*The document filter within a binder* allows you to filter the content that is shown.

You can *switch between compact view and outline view* for a binder.

With *outline view* selected, you can easily expand the sections and view the content within them without having to click into each section.

You can also take actions on the documents from this view via the **'Action Menu'**.

## Reordering and deleting Binder Content

When you're in edit mode on the binder, you drag sections to reorder them and even move documents between sections when in outline view.

If you need to remove content from a binder, it's easy to do with a few clicks.
1. Firs click **'Edit Binder'**.
2. Navigate to the section of the binder where the content exists.
3. Click the **'Action Button'** and Select **'Remove from Binder'**. [^5]
4. Click **'Done Editing'**.

[^5]: This only removes the content from the binder and will leave the content intact in the library.

