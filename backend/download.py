import timm
from fastai.vision.all import *
from io import BytesIO
from PIL import Image
import pickle
from huggingface_hub import from_pretrained_fastai, _save_pretrained_fastai
from contextlib import contextmanager
from pathlib import Path
import pathlib

potato_cat = ('Early_Blight', 'Healthy', 'Late_Blight')
potato = from_pretrained_fastai("Luna-Skywalker/potato_dtect")
_save_pretrained_fastai(potato, "./ml_models/potato_dtect")

corn = from_pretrained_fastai("Luna-Skywalker/corn_dtect")
wheat = from_pretrained_fastai("Luna-Skywalker/wheat_dtect")
rice = from_pretrained_fastai("Luna-Skywalker/rice_dtect")
_save_pretrained_fastai(corn, "./ml_models/corn_dtect")
_save_pretrained_fastai(wheat, "./ml_models/wheat_dtect")
_save_pretrained_fastai(rice, "./ml_models/Rice_dtect")
apple = from_pretrained_fastai("Luna-Skywalker/apple_dtect")
tomato = from_pretrained_fastai("Luna-Skywalker/tomato_dtect")
tea = from_pretrained_fastai("Luna-Skywalker/tea_dtect")
_save_pretrained_fastai(apple, "./ml_models/apple_dtect")
_save_pretrained_fastai(tomato, "./ml_models/tomato_dtect")
_save_pretrained_fastai(tea, "./ml_models/tea_dtect")