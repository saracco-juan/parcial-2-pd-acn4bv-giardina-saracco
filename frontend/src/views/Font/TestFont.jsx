
import React, { use, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useFonts } from '../../hooks/useFonts';

const TestFont = () => {

    const [searchParams] = useSearchParams();
    const fontId = searchParams.get('fontId');

    const { fonts, fetchFontById } = useFonts();

    useEffect(() => {

        if (fontId) {
            fetchFontById(fontId);
        }

    }, [fontId, fetchFontById]);

    if (!fontId) {
        return <Navigate to="/" replace />;
    }

    if (!fonts || fonts.length === 0) {
        return (
            <div className="bg-[#030712] text-white font-sans min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-400">Cargando fuente...</p>
            </div>
        );
    }

    const font = fonts[0];

    return (
        <div className="bg-[#030712] text-white font-sans min-h-screen">
            <div className=" max-w-6xl mx-auto px-6 py-12">
                
                <div className="space-y-8 mb-16">
                    <div className="flex items-start justify-between">
                        <div className="space-y-3">
                            <h1 className="text-7xl font-bold text-primary leading-tight tracking-tight" style={{fontFamily: font.name || 'Inter, sans-serif'}}>
                                {font.name}
                            </h1>
                            <p className="text-xl text-gray-400">{font.category || 'Sans Serif'}</p>
                        </div>
                        
                        <button id="favoriteBtn" className="flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold transition-all rounded">
                            <svg id="heartIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span id="favoriteText">Agregar a Favoritos</span>
                        </button>
                    </div>

                    
                    
                </div>

                <section className="space-y-6 mb-16">
                    <h2 className="text-2xl font-bold text-primary">PROBAR FUENTE</h2>
                    <div className="bg-dark-light border border-gray-800 rounded-lg p-8">
                        <textarea 
                            id="fontTester"
                            className="w-full bg-transparent text-white text-4xl outline-none resize-none border-none focus:ring-0" 
                            style={{fontFamily: font.name, minHeight: '200px'}}
                            placeholder="Escribe aquí para probar la fuente...">El rápido zorro marrón salta sobre el perro perezoso</textarea>
                        
                        
                        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-800">
                            <div className="flex items-center gap-3">
                                <label className="text-sm text-gray-400">Tamaño:</label>
                                <input 
                                    type="range" 
                                    id="fontSize" 
                                    min="16" 
                                    max="96" 
                                    defaultValue="36"
                                    className="w-32 accent-primary"/>
                                <span id="fontSizeValue" className="text-sm text-gray-400 w-12">36px</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <label className="text-sm text-gray-400">Peso:</label>
                                <select 
                                    id="fontWeight" 
                                    className="bg-dark-light border border-gray-700 text-white px-4 py-2 rounded focus:border-primary focus:outline-none"
                                    style={{fontFamily: 'Inter, sans-serif'}}>
                                    <option value="300">Light (300)</option>
                                    <option value="400">Regular (400)</option>
                                    <option value="500">Medium (500)</option>
                                    <option value="600">SemiBold (600)</option>
                                    <option value="700">Bold (700)</option>
                                    <option value="800">ExtraBold (800)</option>
                                    <option value="900">Black (900)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="space-y-6 mb-16">
                    <h2 className="text-2xl font-bold text-primary">ESTILOS Y VARIANTES</h2>
                    
                    <div className="space-y-4">
                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Light (300)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 300}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Regular (400)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 400}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Medium (500)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">SemiBold (600)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 600}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Bold (700)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 700}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        
                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">ExtraBold (800)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 800}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>

                        <div className="bg-dark-light border border-gray-800 p-6 hover:border-yellow-500 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Black (900)</span>
                                <span className="text-xs text-gray-500">Aa Bb Cc 123</span>
                            </div>
                            <p className="text-3xl" style={{fontFamily: 'Inter, sans-serif', fontWeight: 900}}>
                                El rápido zorro marrón salta sobre el perro perezoso
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6 mb-16">
                    <h2 className="text-2xl font-bold text-primary">CONJUNTO DE CARACTERES</h2>
                    <div className="bg-dark-light border border-gray-800 rounded-lg p-8">
                        <div className="space-y-8">
                            <div>
                                <p className="text-sm text-gray-400 mb-3">Mayúsculas</p>
                                <p className="text-3xl tracking-wider" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
                                    A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-3">Minúsculas</p>
                                <p className="text-3xl tracking-wider" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
                                    a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-3">Números</p>
                                <p className="text-3xl tracking-wider" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
                                    0 1 2 3 4 5 6 7 8 9
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-3">Símbolos</p>
                                <p className="text-3xl tracking-wider" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
                                    ! @ # $ % ^ & * ( ) - _ = + [ ] { } ; : ' " , . / ? \ | ` ~
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default TestFont
