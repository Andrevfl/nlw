import { FeedBackType, feedbackTypes } from "..";
interface FeedbackTypeStepProps { //interface abre a cahamada da props depois só informar o parametro do componente
    onFeedbackTypeChanged : (type: FeedBackType) => void;
}
export function FeedbackTypeStep({ onFeedbackTypeChanged } : FeedbackTypeStepProps ){ //recebendo a props
    return (
        <div className="flex py-8 gap-8 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
                <>
                    <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    onClick={ ()=> onFeedbackTypeChanged(key as FeedBackType)}
                    type="button"
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>           
               </>


            );
        })}
    </div>
    );
}