import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../components/ui/select"
import language from 'interlang_app_sdk/dist/supported_languages'
import { createDocumentTranslate, getDynamicData, getDynamicTranslationData, setDynamicData, updateDynamicData } from 'interlang_app_sdk/dist/client'

/**
 * 
 * @constant {string} greetingDynamicData this is the constant that
 *  stores the dynamic data used in the code
 */
const greetingDynamicData = '["Hello There", "Hi There", "Hey There"]';


/**
 * The Component that handles language change
 */
const LanguageChange = () => {

    /**
     * The state variables that controls which content is currently in view
     */
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [greetingButton, setGreetingButton] = useState("");
    const [count, setCount] = useState(1);


    /**
     * @function handleLanguageTranslate 
     * This function uses the @function createDocumentTranslate function from 
     * the InterLang SDK to perform the language conversion 
     */
    const handleLanguageTranslate = () => {
      if(selectedLanguage.length === 0 || selectedLanguage === "") return;
        createDocumentTranslate({
            apiKey: '', // Your InterLang API Key. Your Test or Main API Key
            languageFrom: 'auto',
            applicationId: '', /* Your InterLang Project ID. 
            It can be empty if you are using a Test API Key, If you are using your Main API Key, 
            it should not be empty */
            targetLanguage: selectedLanguage,
            onProcessing: function (): void {
              alert('Translating document')
            },
            onTranslated: function (): void {
              alert('Translated document')
            },
        })
    }

    /**
     * @function changeGreeting
     * This function updates greetingDynamicData, and sets 
     * which item from greetingDynamicData is currently visible
     */
    const changeGreeting = (update: number) => {
        updateDynamicData(greetingDynamicData, { active: update });
        const indexOfGreeting = getDynamicData(greetingDynamicData);
        const valueOfGreeting = getDynamicTranslationData(greetingDynamicData, indexOfGreeting);
        setGreetingButton(valueOfGreeting);
    }

    /**
     * Preparation of the dynamic data contents
     * The active field specifies which item in the dynamic data greetingDynamicData 
     * is currently visible
     */
    useEffect(()=>{
        setDynamicData(greetingDynamicData, { active: 0 });
        const indexOfGreeting = getDynamicData(greetingDynamicData);
        const valueOfGreeting = getDynamicTranslationData(greetingDynamicData, indexOfGreeting);
        setGreetingButton(valueOfGreeting);
    }, [])


  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {/**
         * In this component, the className inter-lang:ignore is used to tell
         * InterLang to ignore this element and it's children when language translation starts 
         */}
        <div className='inter-lang:ignore'>
        <Button onClick={handleLanguageTranslate} >Change Language</Button>
        </div>
        <Select onValueChange={(e)=>setSelectedLanguage(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {language.map((lang: { code: string; language: string | number | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }, index: React.Key | null | undefined)=>(
             <SelectItem key={index} value={lang.code}>{lang.language}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    {/** 
     * Creating an element with a dynamic content.
     *   
     * In the Button Component here, there is a dynamic content,
     * which is identified by InterLang through the className dynamic:content:inter-lang
     * 
     * When the button is clicked on, the visible item in greetingDynamicData is updated
     * */}
    <Button onClick={()=>{
        if(count === 2){
            setCount(0);
            changeGreeting(count);
        }else{
            setCount(count+1);
            changeGreeting(count);
        }
    }}>
       <div className='dynamic:content:inter-lang'>
           <p data-key={greetingDynamicData}>
            {greetingButton}
           </p>
        </div> 
    </Button>
    </div>
  )
}

export default LanguageChange