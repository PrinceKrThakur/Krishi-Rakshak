# FastAPI Image Classification API

This is a simple FastAPI application for image classification using pre-trained models. The application receives an image and the model selection, then returns the predicted class probabilities for the specified model.

## Prerequisites

Before running the application, ensure that you have the required dependencies installed. You can install them using the following command:

```bash
  pip install fastapi uvicorn timm fastai
```
or you can use:
```bash
  pip install -r requirements.txt
```
then you have to run the **download.py** file to import the models from Hugging Face Hub:
```bash
  python download.py
```
## Models

The application uses pre-trained models for classifying images of crops. The available models are:

**Corn Model**:  Common_Rust, Gray_Leaf_Spot, Healthy, Northern_Leaf_Blight \
**Wheat Model**:  Healthy, Yellow_Rust, Brown_Rust \
**Potato Model**:  Early_Blight, Healthy, Late_Blight \
**Rice Model**:  Brown_Spot, Neck_Blast, Leaf_Blast, Healthy 

## Usage

1. Run the FastAPI application using the following command:
```bash
uvicorn duplicate:app --reload
```
2. Access the FastAPI Swagger documentation at http://127.0.0.1:8000/docs to interact with the API.

3. Use the /corn endpoint to make predictions about corn. Please provide an image.

4. Use the /wheat endpoint to make predictions about wheat. Please provide an image.

5. Use the /potato endpoint to make predictions about potato. Please provide an image.

6. Use the /rice endpoint to make predictions about rice. Please provide an image.

The API will return the predicted class probabilities for the specified model.

## Example

**curl**
```bash
  curl -X 'POST' \
  'http://127.0.0.1:8000/predict' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'selected_model=1' \
  -F 'file=@f4a3435010083dde22eb447a1cf37d1b.jpg;type=image/jpeg'
```
**response**
```bash
  {
    "Common_Rust": 0.000009077361028175801,
    "Gray_Leaf_Spot": 0.006003241520375013,
    "Healthy": 0.0000026214127046841895,
    "Northern_Leaf_Blight": 0.993985116481781
  }
```
