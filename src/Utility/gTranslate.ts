import axios, { AxiosResponse } from 'axios';

const API_KEY = 'AIzaSyD1YxTQRGcOcfhdlz714XrN9ajDil0wZRE';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

interface TranslationResponse {
  data: {
    translations: {
      translatedText: string;
    }[];
  };
}

const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  try {
    const response: AxiosResponse<TranslationResponse> = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        q: text,
        target: targetLanguage,
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};

export default translateText;
