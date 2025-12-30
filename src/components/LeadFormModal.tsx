import { useState } from "react";
import { X, Download, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  studyTitle: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Interface para os erros de validação
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const LeadFormModal = ({ isOpen, onClose, onSuccess, studyTitle }: LeadFormModalProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  // Novo estado para guardar mensagens de erro
  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  // --- Função Auxiliar: Máscara de Telefone (Brasil) ---
  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    // Aplica a máscara (XX) XXXXX-XXXX
    return numbers
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2");
  };

  // --- Função Auxiliar: Validação ---
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // 1. Valida Nome (Mínimo 3 letras)
    if (formData.name.trim().length < 3) {
      newErrors.name = "Por favor, digite seu nome completo.";
      isValid = false;
    }

    // 2. Valida E-mail (Regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, digite um e-mail válido.";
      isValid = false;
    }

    // 3. Valida Telefone (Mínimo 10 dígitos numéricos: DDD + 8 números)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.phone = "O telefone precisa ter DDD + número (mínimo 10 dígitos).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // --- Handler de Mudança no Telefone (Com Máscara) ---
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    // Limita a 15 caracteres: (11) 99999-9999
    if (formatted.length <= 15) {
      setFormData({ ...formData, phone: formatted });
      // Limpa o erro se o usuário começar a corrigir
      if (errors.phone) setErrors({ ...errors, phone: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Roda a validação antes de qualquer coisa
    if (!validateForm()) {
      return; // Para tudo se houver erros
    }

    setStatus('loading');

    try {
      // Simulação de delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Lead Validado e Capturado:", { ...formData, study: studyTitle });
      setStatus('success');

      setTimeout(() => {
        onSuccess();
        handleClose();
      }, 2500);

    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setFormData({ name: "", email: "", phone: "" });
    setErrors({}); // Limpa erros ao fechar
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50 bg-muted/20">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {status === 'success' ? 'Tudo pronto!' : 
               status === 'error' ? 'Ops, algo deu errado' : 
               'Baixar Estudo'}
            </h3>
            {status === 'idle' && (
              <p className="text-xs text-muted-foreground mt-1">Preencha para liberar o download gratuito.</p>
            )}
          </div>
          
          {status !== 'loading' && status !== 'success' && (
            <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          
          {(status === 'idle' || status === 'loading') && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* CAMPO NOME */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  disabled={status === 'loading'}
                  // Adiciona borda vermelha se tiver erro
                  className={`w-full h-10 px-3 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.name 
                      ? "border-red-500 focus:ring-red-500/50" 
                      : "border-input focus:ring-primary/50"
                  }`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: undefined});
                  }}
                />
                {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
              </div>

              {/* CAMPO EMAIL */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
                <input
                  name="email"
                  id="email"
                  type="email" // Importante manter type="email" para teclados mobile
                  placeholder="seu@email.com"
                  disabled={status === 'loading'}
                  className={`w-full h-10 px-3 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.email 
                      ? "border-red-500 focus:ring-red-500/50" 
                      : "border-input focus:ring-primary/50"
                  }`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
              </div>

              {/* CAMPO TELEFONE */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefone / WhatsApp</label>
                <input
                  name="phone"
                  id="phone"
                  type="tel" // Abre teclado numérico no celular
                  placeholder="(11) 99999-9999"
                  disabled={status === 'loading'}
                  className={`w-full h-10 px-3 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    errors.phone 
                      ? "border-red-500 focus:ring-red-500/50" 
                      : "border-input focus:ring-primary/50"
                  }`}
                  value={formData.phone}
                  onChange={handlePhoneChange} // Usa o handler com máscara
                />
                {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full mt-4 gap-2" 
                size="lg"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Validando...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Baixar PDF Agora
                  </>
                )}
              </Button>
              
              <p className="text-[10px] text-center text-muted-foreground mt-4">
                Ao clicar em baixar, você concorda em receber comunicações da One Station Media.
              </p>
            </form>
          )}

          {/* ESTADO DE SUCESSO (Visual) */}
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center py-8 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-500 animate-bounce-slow" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Sucesso!</h4>
              <p className="text-center text-muted-foreground text-sm max-w-[250px]">
                Seus dados foram validados. O download começará automaticamente.
              </p>
              <div className="mt-6 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary h-full animate-[progress_2s_ease-in-out_forwards] w-0" />
              </div>
              <style>{`
                @keyframes progress {
                  0% { width: 0%; }
                  100% { width: 100%; }
                }
              `}</style>
            </div>
          )}

          {/* ESTADO DE ERRO (Visual) */}
          {status === 'error' && (
            <div className="flex flex-col items-center justify-center py-6 animate-in shake duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Houve um erro</h4>
              <p className="text-center text-muted-foreground text-sm max-w-[250px] mb-6">
                Não conseguimos processar sua solicitação no momento. Verifique sua conexão.
              </p>
              <Button 
                onClick={() => setStatus('idle')}
                variant="outline"
                className="w-full"
              >
                Tentar Novamente
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;