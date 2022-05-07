import { X } from "phosphor-react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../img/emoji.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um lampada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balao de pensamento',
        }
    },
}
export type FeedBackType = keyof typeof feedbackTypes; //tratando tipagem

export function WidgetForm() {
    const [feedbackType, setfeedbackType] = useState<FeedBackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6"> </span>
                <CloseButton />
            </header>



            {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} /> //pode dar o nome que quizer para a props
            ) : (
                //conteudo
                <p>helow world</p>
            )}

            <footer className="text-xs text-neural-400">
                Feito com ♥ pela  <a className="underline underline-offset-2" href="">Rocketseat</a>
            </footer>

        </div>
    )
}