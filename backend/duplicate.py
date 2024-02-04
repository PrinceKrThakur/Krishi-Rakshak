from fastapi import FastAPI, HTTPException, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
import uvicorn
import timm
from fastai.vision.all import *
from io import BytesIO
from PIL import Image
import pickle
from contextlib import contextmanager
import pathlib

# For error "NotImplementedError: cannot instantiate 'PosixPath' on your system"




model_paths = ["./ml_models/corn_dtect/model.pkl", "./ml_models/wheat_dtect/model.pkl",
                "./ml_models/potato_dtect/model.pkl","./ml_models/Rice_dtect/model.pkl",
                "./ml_models/apple_dtect/model.pkl","./ml_models/tomato_dtect/model.pkl",
                "./ml_models/tea_dtect/model.pkl"]
models = [load_learner(model_path) for model_path in model_paths]

corn_cat = ('Common_Rust', 'Gray_Leaf_Spot', 'Healthy', 'Northern_Leaf_Blight')
potato_cat = ('Early_Blight', 'Healthy', 'Late_Blight')
rice_cat =('Brown_Spot', 'Neck_Blast', 'Leaf_Blast', 'Healthy')
wheat_cat = ('Healthy', 'Yellow_Rust', 'Brown_Rust')
apple_cat = ('black_rot','healthy','rust','scab')
tomato_cat = ('bacterial_spot', 'early_blight','healthy','late_blight','leaf_mold','mosaic_virus','septoria_leaf_spot',
              'spider_mites_(two_spotted_spider_mite)','target_spot','yellow_leaf_curl_virus')
tea_cat = ('algal_leaf','anthacnose','bird_eye_spot','brown_blight','healthy','read_leaf_spot')

cat = [corn_cat,wheat_cat,potato_cat,rice_cat,apple_cat,tomato_cat,tea_cat]

# prediction function
def classify_image(categories,model,img):
    pred_class, pred_idx, probs = model.predict(img)
    return dict(zip(categories,map(float,probs)))

def predict_image(file, cat, model):
        # Read the image file

        try:
            image = PILImage.create(file)
            if image is None:
                raise ValueError("Image could not be loaded.")
        except Exception as e:
                print(f"Error opening image: {e}")
        print(image)

        # Perform prediction using the model
        prediction = classify_image(cat,model,image)

        # Prepare the response
        # response = {
        #     "model_name": model.name,
        #     "prediction": str(prediction)
        # }

        # Return JSON response
        return JSONResponse(content=jsonable_encoder(prediction), status_code=200)


# Create FastAPI app
app = FastAPI()
#middleware config
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/corn")
async def corn(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents , corn_cat, models[0])

@app.post("/wheat")
async def wheat(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, wheat_cat, models[1])

@app.post("/potato")
async def potato(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, potato_cat, models[2])

@app.post("/rice")
async def rice(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, rice_cat, models[3])

@app.post("/apple")
async def apple(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, apple_cat, models[4])

@app.post("/tomato")
async def tomato(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, tomato_cat, models[5])

@app.post("/tea")
async def tea(file: UploadFile = File(...)):
    contents = await file.read()
    return predict_image(contents, tea_cat, models[6])


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)